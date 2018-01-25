import Sequelize from 'sequelize'
const ssacl = require('ssacl-attribute-roles')

const UserModel = Sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    },
    roles: {
      admin: { get: true },
      self: true
    }
  },
  password: {
    tfype: Sequelize.STRING,
    allowNull: false,
    roles: false
  },
  emailAccessToken: {
    type: Sequelize.STRING,
    allowNull: true
  },
  emailVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  linkedWithFacebook: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  linkedWithTwitter: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  linkedWithGoogle: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  linkedWithLinkedin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  createdAtIp: {
    type: Sequelize.STRING,
    validate: {
      isIP: true
    }
  },
  rank: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    references: {
      model: 'rank',
      key: 'id',
      as: 'rankId'
    },
    roles: {
      self: { set: false, get: true },
      admin: true
    }
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      is: ['^[a-z]+$', 'i']
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      is: ['^[a-z]+$', 'i']
    }
  },
  street: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      is: ['^[a-z]+$', 'i']
    }
  },
  homeNo: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isInt: true
    }
  },
  aptNo: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isInt: true
    }
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true
  },
  countryId: {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: 'country',
      key: 'id',
      as: 'countryId'
    }
  },
  ethAddress: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      is: ['^0x[a-fA-F0-9]{40}$~']
    }
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false
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

export default ssacl(UserModel)
