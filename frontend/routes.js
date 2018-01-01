const routes = module.exports = require('next-routes')()
var path = require('path')

routes
.add('index')
.add('/blog/', 'blog')
.add('/author/:username/:page/', 'author')
.add('/category/:category/:page/', 'category')
.add('/post/:slug/', 'post')
.add('/login/', 'login')
.add('/board/:user/', 'dashboard')
