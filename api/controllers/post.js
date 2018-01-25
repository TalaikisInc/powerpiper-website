import queries from './queries'
import PostModel from '../models/post'
import UserModel from '../models/user'

module.exports = {
  async create(req, res) {
    try {
      const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        userId: req.user.id
      })

      return res.status(200).send(post)
    } catch (err) {
      return res.status(500).send(err)
    }
  },

  async list(req, res) {
    try {
      const posts = await PostModel.findAll(
        queries.posts.list({ UserModel, PostModel })
      )
      return res.status(200).send(posts)
    } catch (err) {
      return res.status(500).send(err)
    }
  },

  async get(req, res) {
    try {
      const post = await Post.findById(
        req.params.postId,
        queries.posts.get({ UserModel, PostModel })
      )

      if (!post) {
        return res.status(404).send({
          message: 'Post Not Found'
        })
      }

      return res.status(200).send(post)
    } catch (err) {
      return res.status(500).send(err)
    }
  },

  async update(req, res) {
    try {
      const post = await PostModel.find({
        where: {
          id: req.params.postId,
          userId: req.user.id
        },
      })

      if (!post) {
        return res.status(404).send({
          message: '404 on post update'
        })
      }

      const updatedPost = await post.update({
        title: req.body.title || post.title,
        content: req.body.content || post.content
      })

      return res.status(200).send(updatedPost)
    } catch (err) {
      return res.status(500).send(err)
    }
  },

  async delete(req, res) {
    try {
      const post = await PostModel.find({
        where: {
          id: req.params.postId,
          userId: req.user.id
        },
      });

      if (!post) {
        return res.status(404).send({
          message: 'Post Not Found'
        })
      }

      await post.destroy();

      return res.status(200).send({
        message: null
      });
    } catch (err) {
      return res.status(500).send(err)
    }
  }
}
