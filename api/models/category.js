import Sequelize from 'sequelize'

export const CategoryModel = Sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  userId: {
    allowNull: true,
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE',
    references: {
      model: 'user',
      key: 'id',
      as: 'userId'
    }
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})
