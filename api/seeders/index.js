const User = require('../models/user')
const Category = require('../models/user')
const Post = require('../models/post')
const Page = require('../models/page')
const Country = require('../models/country')
const Rank = require('../models/rank')
const db = require('../models')

const users = [
  {
    name: 'Anna',
    image: 'images/girl.jpeg',
  },
  {
    name: 'Helen',
    image: 'images/bee.jpeg',
  },
  {
    name: 'Tom',
    image: 'images/crab.jpeg',
  },
  {
    name: 'Sheila',
    image: 'images/mermaid.jpeg',
  },
  {
    name: 'Michael',
    image: 'images/rooster.jpeg',
  },
  {
    name: 'Tess',
    image: 'images/tweety.jpeg',
  },
  {
    name: 'Shane',
    image: 'images/minion.jpeg',
  },
  {
    name: 'Janine',
    image: 'images/cow.jpeg',
  },
  {
    name: 'John',
    image: 'images/clown.jpeg',
  }
]

const ranks = [
  {
    name: 'random',
  },
  {
    name: 'tigers',
  },
  {
    name: 'cavaliers',
  },
  {
    name: 'vikings',
  },
  {
    name: 'indians',
  }
]

const countries = [
  {
    name: 'random',
  },
  {
    name: 'tigers',
  },
  {
    name: 'cavaliers',
  },
  {
    name: 'vikings',
  },
  {
    name: 'indians',
  }
]

const posts = [
  {
    name: 'random',
  },
  {
    name: 'tigers',
  },
  {
    name: 'cavaliers',
  },
  {
    name: 'vikings',
  },
  {
    name: 'indians',
  }
]

const pages = [
  {
    name: 'random',
  },
  {
    name: 'tigers',
  },
  {
    name: 'cavaliers',
  },
  {
    name: 'vikings',
  },
  {
    name: 'indians',
  }
]

const categories = [
  {
    name: 'random',
  },
  {
    name: 'tigers',
  },
  {
    name: 'cavaliers',
  },
  {
    name: 'vikings',
  },
  {
    name: 'indians',
  }
]

const getUserId = () => Math.floor(Math.random() * (users.length - 1)) + 1

const getPostId = () => Math.floor(Math.random() * (users.length - 1)) + 1

const messages = [
  {
    authorId: getUserId(),
    content: 'I like React!',
    channelId: getPostId(),
  }
]

const seed = () => {
  return Promise.all(users.map(author => User.create(author)))
    .then(() => Promise.all(categories.map(category => Category.create(category))))
    .then(() => Promise.all(countries.map(country => Country.create(country))))
    .then(() => Promise.all(ranks.map(rank => Rank.create(rank))))
    .then(() => Promise.all(posts.map(post => Post.create(post))))
    .then(() => Promise.all(pages.map(page => Page.create(page))))
}

/* eslint-disable no-console */
const main = () => {
  console.log('Syncing db....')

  db.sync({ force: true })
    .then(() => {
      console.log('Seeding db....')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      console.log('Closing db connection....')
      db.close()
      return null
    })
}

main()
