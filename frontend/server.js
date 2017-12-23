require('dotenv').config({ path: '../.env' })

const express = require('express')
const path = require('path')
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')
const port = process.env.FRONTEND_PORT

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
      const server = express()

      // enable middleware for i18next
      server.use(i18nextMiddleware.handle(i18n))

      // serve locales for client
      server.use('/locales', express.static(path.join(__dirname, '/locales')))

      // missing keys
      server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

      // use next.js
      server.get('*', (req, res) => handler(req, res))

      server.use(handler).listen(port, (err) => {
        if (err) throw err
        //console.log(`> Ready on http://localhost:${port}`)
      })
    })
})
