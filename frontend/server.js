require('dotenv').config({ path: '../.env' })

const next = require('next')
const routes = require('./routes')
//const scss = require('./pages/assets/scss/theme.scss')
//npm-sass ./pages/assets/scss/theme.scss > ./dist/grommet.css
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(process.env.FRONTEND_PORT || 3010)
})