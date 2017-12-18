const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlPlugin = require('html-webpack-plugin')
const rimraf = require('rimraf');

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: __dirname + '/pages',
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].[hash:16].js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.scss', '.css']
  },
  watch: NODE_ENV == 'development',
  devtool: NODE_ENV == 'development' ? 'eval' : 'source-map',
  devServer: {
    contentBase: 'build/',
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    proxy: [
      {
        path: '/api/',
        target: 'http://localhost:' + process.env.FRONTEND_PORT || 3010,
        pathRewrite: {'^/api' : ''}
      }
    ]
  },
  plugins: [
    {
      apply: (compiler) => {
        rimraf.sync(compiler.options.output.path)
      }
    },
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:16].css',
      allChunks: true
    }),
    new HtmlPlugin({
      template: './index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: __dirname + '/pages'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            },
          ]
        })
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  __dirname + '/node_modules'
                ],
                outputStyle: 'compressed'
              }
            }
          ]
        })
      }
    ]
  },
}

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  )
  module.exports.plugins.push(
    new BundleAnalyzerPlugin()
  )
}