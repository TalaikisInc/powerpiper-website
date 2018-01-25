import path from 'path'
import sequelize from 'sequelize'
const ssacl = require('ssacl-attribute-roles')

const db = {};
const env = process.env.NODE_ENV || 'development'
const sequelizeConfig = require(`${__dirname}/../../db.js`)[env]

const ORM = new sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  sequelizeConfig
)

db.UserModel = ORM.import(path.join(__dirname, 'user.js'))
db.PostModel = ORM.import(path.join(__dirname, 'post.js'))

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
})

db.ORM = ssacl(ORM)
db.sequelize = sequelize

module.exports = db
