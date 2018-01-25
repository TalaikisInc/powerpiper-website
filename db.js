const prod = process.env.NODE_ENV === 'production'
const envLoc = prod ? '../.env' : '../.env.development'
require('dotenv').config({ path: envLoc })
const Sequelize = require('sequelize')

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
  },
  session: {
    secret: process.env.SESSION_SECRET,
    operatorsAliases: Sequelize.Op
  }
}
