import Sequelize from 'sequelize'

export const CountryModel = Sequelize.define('country', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})
