import Sequelize from 'sequelize'

export const RankModel = Sequelize.define('rank', {
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
