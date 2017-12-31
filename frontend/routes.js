const routes = module.exports = require('next-routes')()
var path = require('path')

routes
.add('index')
.add('/blog', 'blog')
.add('/blog/author/:username', 'blog')
.add('/blog/category/:category', 'blog')
.add('/blog/:slug', 'blog')
