const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const OfflinePlugin = require('offline-plugin')
const Dotenv = require('dotenv-webpack')
const offlineSupport = process.env.OFFLINE_SUPPORT
const prod = process.env.NODE_ENV === 'production'
const offline = offlineSupport.match(/true/i) ? true : false
const router = require('./routes')

const initExport = {
  poweredByHeader: false,
  webpack: (config) => {
    config.plugins.push(new webpack.IgnorePlugin(/^raven$/))
    config.plugins.push(new Dotenv({ path: './public.env' }))

    config.module.rules.push({
      test: /\.(css|scss)/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]'
      }
    },
    {
      test: /\.css$/,
      use: ['babel-loader', 'raw-loader', 'postcss-loader']
    },
    {
      test: /\.s(a|c)ss$/,
      use: ['babel-loader', 'raw-loader', 'postcss-loader',
        { loader: 'sass-loader',
          options: {
            includePaths: ['styles', 'node_modules']
              .map((d) => path.join(__dirname, d))
              .map((g) => glob.sync(g))
              .reduce((a, c) => a.concat(c), [])
          }
        }
      ]
    })

    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }

    if (prod) {
      const Uglify = require('uglifyjs-webpack-plugin')
      config.plugins.push(
        new Uglify({
          parallel: true,
          cache: true,
          sourceMap: true
        })
      )
    }

    if (prod && offline) {
      config.plugins.push(
        new OfflinePlugin({
          publicPath: '/',
          relativePaths: false,
          externals: ['/', '/manifest.html'],
          excludes: ['.htaccess'],
          safeToUseOptionalCaches: true,
          caches: 'all',
          rewrites: function rewrites(asset) {
            if (
              asset.indexOf('.hot-update.js') > -1 ||
              asset.indexOf('build-stats.json') > -1 ||
              asset === 'BUILD_ID' ||
              asset.indexOf('dist/') === 0
            ) {
              return null
            }

            if (asset[0] === '/') {
              return asset
            }

            if (asset.indexOf('bundles/pages/') === 0) {
              return `/_next/-/${asset
                .replace('bundles/pages', 'page')
                .replace('index.js', '')
                .replace(/\.js$/, '')}`;
            }

            return `/_next/-/${asset}`;
          },
          autoUpdate: 1000 * 60 * 5,
          __tests: !prod ? { ignoreRuntime: true } : {},
          ServiceWorker: {
            events: true,
            navigateFallbackURL: '/'
          },
          AppCache: {
            directory: './',
            events: true
          }
        })
      )
    }

    return config
  }
}

if (process.env.STATIC_EXPORT) {
  initExport.exportPathMap = function exportPathMap() {
    const routes = {}
    routes['/'] = {
      page: 'index'
    }

    router.routes.forEach(route => {
      if (!route.pattern.includes(':')) {
        routes[route.pattern] = {
          page: route.page
        }
      }
    })

    return routes
  }
}

/* eslint-enable global-require */
module.exports = initExport
