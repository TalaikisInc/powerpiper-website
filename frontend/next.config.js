const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')
const { ANALYZE } = process.env

module.exports = {
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true
            }),
        new WebpackBundleSizeAnalyzerPlugin('stats.txt')
      )
    }

    return config
  }
}
