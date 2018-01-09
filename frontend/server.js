require('dotenv').config({ path: '../.env' })

const express = require('express')
const smtpTransport = require('nodemailer-smtp-transport')
const directTransport = require('nodemailer-direct-transport')
const path = require('path')
const next = require('next')
const app = next({dev: process.env.NODE_ENV !== 'production' })
const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')
const port = process.env.FRONTEND_PORT
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoClient = require('mongodb').MongoClient
const MongoStore = require('connect-mongo')(session)
const NeDB = require('nedb')
const routes = require('./routes/index')
const auth = require('./routes/auth')
const handler = routes.getRequestHandler(app)

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception: ', err)
})

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection: Promise:', p, 'Reason:', reason)
})

let mailserver = directTransport()
if (process.env.EMAIL_SERVER && process.env.EMAIL_USERNAME && process.env.EMAIL_PASSWORD) {
  mailserver = smtpTransport({
    host: process.env.EMAIL_SERVER,
    port: process.env.EMAIL_PORT || 25,
    secure: (process.env.EMAIL_SECURE && process.env.EMAIL_SECURE.match(/true/i)) ? true : false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })
}

let sessionStore, userdb

const server = express()

server.use(cookieParser())

i18n.use(Backend).use(i18nextMiddleware.LanguageDetector).init({
  preload: ['en', 'de', 'es', 'fr', 'ru', 'ko'],
  ns: ['index'],
  backend: {
    loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
    addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json')
  }
}, () => {
  // loaded translations we can bootstrap our routes
  app.prepare()
    .then(() => {
      return new Promise((resolve, reject) => {
        if (process.env.USER_DB_CONNECTION_STRING) {
          // Example connection string: mongodb://localhost:27017/my-user-db
          MongoClient.connect(process.env.USER_DB_CONNECTION_STRING, (err, db) => {
            userdb = db.collection('users')
            resolve(true)
          })
        } else {
          console.warn('Warning: No user database connection string configured (using in-memory database, user data will not be persisted)')
          userdb = new NeDB({ autoload: true })
          userdb.loadDatabase((err) => {
            if (err) {
              return reject(err)
            }
            resolve(true)
          })
        }
      })
    })
    .then(() => {
      return new Promise((resolve) => {
        if (process.env.SESSION_DB_CONNECTION_STRING) {
          sessionStore = new MongoStore({
            url: process.env.SESSION_DB_CONNECTION_STRING,
            autoRemove: 'interval',
            autoRemoveInterval: 10, // Removes expired sessions every 10 minutes
            collection: 'sessions',
            stringify: false
          })
          resolve(true)
        } else {
          console.warn('Warning: No session database connection string configured (using in-memory session store, session data will not be persisted)')
          sessionStore = new session.MemoryStore()
          resolve(true)
        }
      })
    })
    .then(() => {
      // auth
      auth.configure({
        nextApp: app,
        expressApp: server,
        userdb: userdb,
        session: session,
        store: sessionStore,
        secret: process.env.SESSION_SECRET,
        mailserver: mailserver,
        fromEmail: process.env.FROM_EMAIL_ADDRESS || null,
        serverUrl: process.env.SERVER_URL || null
      })

      // enable middleware for i18next
      server.use(i18nextMiddleware.handle(i18n))

      // serve locales for client
      server.use('/locales', express.static(path.join(__dirname, '/locales')))

      // missing keys
      server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

      // Expose a route to return user profile if logged in with a session
      server.get('/board/user', (req, res) => {
        if (req.user) {
          userdb.findOne({ _id: req.user.id }, (err, user) => {
            if (err || !user) {
              return res.status(500).json({ error: 'Unable to fetch profile' })
            }
            res.json({
              name: user.name,
              email: user.email,
              emailVerified: (user.emailVerified && user.emailVerified === true) ? true : false,
              linkedWithFacebook: (user.facebook && user.facebook.id) ? true : false,
              linkedWithGoogle: (user.google && user.google.id) ? true : false,
              linkedWithTwitter: (user.twitter && user.twitter.id) ? true : false,
              linkedWithLinkedin: (user.linkedin && user.linkedin.id) ? true : false
            })
          })
        } else {
          return res.status(403).json({error: 'Must be signed in to get profile' })
        }
      })

      // Expose a route to allow users to update their profiles (name, email)
      server.post('/board/user', (req, res) => {
        if (req.user) {
          userdb.findOne({ _id: req.user.id }, (err, user) => {
            if (err || !user) {
              return res.status(500).json({ error: 'Unable to fetch profile' })
            }

            if (req.body.name) {
              user.name = req.body.name
            }

            if (req.body.email) {
              // Reset email verification field if email address has changed
              if (req.body.email && req.body.email !== user.email) {
                user.emailVerified = false
              }
              user.email = req.body.email
            }
            userdb.update({ _id: user._id }, user, {}, () => {
              if (err) {
                return res.status(500).json({ error: 'Unable save changes to profile' })
              }
              return res.status(204).redirect('/board/')
            })
          })
        } else {
          return res.status(403).json({ error: 'Must be signed in to update profile' })
        }
      })

      // use next.js
      server.get('*', (req, res) => handler(req, res))

      server.use(handler).listen(port, (err) => {
        if (err) {
          throw err
        }
        console.log('> Ready on http://localhost:${port}')
      })
    })
})
