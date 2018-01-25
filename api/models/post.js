import Sequelize from 'sequelize'

export const PostModel = Sequelize.define('post', {
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
    allowNull: false
  },
  userId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE',
    references: {
      model: 'user',
      key: 'id',
      as: 'userId'
    }
  },
  categoryId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE',
    references: {
      model: 'category',
      key: 'id',
      as: 'categoryId'
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
