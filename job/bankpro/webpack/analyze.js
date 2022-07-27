const merge = require('webpack-merge')
const devConfig = require('./dev')

const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(devConfig, {
  plugins: [
    // error log & analalyse tools
    new ErrorOverlayPlugin(),
    new BundleAnalyzerPlugin(),
    new DashboardPlugin({
      port: 3001
    })
  ]
})