```js
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const baseConfig = require('./base')

const publicPath = '/'
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const HOST = 'localhost'
const PORT = 3008

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: resolveApp('dist'),
    filename: 'assets/js/[name].[hash:4].js',
    chunkFilename: 'assets/js/[name].[hash:4].chunk.js',
    publicPath,
  },
  devtool: 'source-map',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    historyApiFallback: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    disableHostCheck: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/,
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      PROJECT_ROOT: JSON.stringify(publicPath),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
})
```