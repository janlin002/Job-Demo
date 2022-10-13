```js
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const API_HOST = (() => {
  switch (process.env.HOST) {
    // case 'sunnybank':
    //   return JSON.stringify('https://isunnytrain.sunnybank.com.tw/api')
    // case 'sunnybanktest':
    //   return JSON.stringify('https://www.esunnybank.com.tw/api')
    // case 'sunnybankmachine':
    //   return JSON.stringify('http://10.99.99.32:8080/api')

    // local
    case 'local':
      return JSON.stringify('http://localhost:8080/api')
    // 因為直接call api有cors問題，使用node啟動一個proxy server轉接，就可以call api
    // node為單獨啟動的資料夾，詳細可看node資料夾內附的readme
    case 'local-sunnybank-test-proxy':
      return JSON.stringify('http://localhost:8080/api')
    // stg
    case 'bankpro':
      return JSON.stringify('http://BK-SUNNYBK01:8080/api')
    // pre-release
    case 'sunnybank-test':
      return JSON.stringify('https://b2bank-t.sunnybank.com.tw/api')
    case 'sunnybank-uat':
      return JSON.stringify('https://b2bank-u.sunnybank.com.tw/api')
    case 'sunnybank-prod':
      return JSON.stringify('https://b2bank.sunnybank.com.tw/api')
    default:
      return JSON.stringify('http://localhost:8080/api')
  }
})()

const IS_DEV_ENV = (() => {
  switch (process.env.HOST) {
    case 'local':
      return true

    default:
      return false
  }
})()

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    alias: {
      ActionTypes: path.resolve(__dirname, '../src/constants/actionTypes/'),
      Assets: path.resolve(__dirname, '../src/assets/'),
      Components: path.resolve(__dirname, '../src/components/'),
      Constants: path.resolve(__dirname, '../src/constants/'),
      Containers: path.resolve(__dirname, '../src/containers/'),
      Data: path.resolve(__dirname, '../src/data/'),
      Jest: path.resolve(__dirname, '../jest/'),
      JestUtil: path.resolve(__dirname, '../src/__tests__/utils/'),
      Pages: path.resolve(__dirname, '../src/pages/'),
      Redux: path.resolve(__dirname, '../src/redux/'),
      Routes: path.resolve(__dirname, '../src/routes/'),
      Util: path.resolve(__dirname, '../src/util/'),
      Hooks: path.resolve(__dirname, '../src/hooks/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(\/|\\)(?!react-intl|flat)/,
        use: [
          {
            loader: 'thread-loader',
            // loaders with equal options will share worker pools
            options: {
              // the number of spawned workers, defaults to (number of cpus - 1) or
              // fallback to 1 when require('os').cpus() is undefined
              workers: 2,

              // number of jobs a worker processes in parallel
              // defaults to 20
              workerParallelJobs: 50,

              // additional node.js arguments
              workerNodeArgs: ['--max-old-space-size=1024'],

              // Allow to respawn a dead worker pool
              // respawning slows down the entire compilation
              // and should be set to false for development
              poolRespawn: false,

              // timeout for killing the worker processes when idle
              // defaults to 500 (ms)
              // can be set to Infinity for watching builds to keep workers alive
              poolTimeout: 2000,

              // number of jobs the poll distributes to the workers
              // defaults to 200
              // decrease of less efficient but more fair distribution
              poolParallelJobs: 50,

              // name of the pool
              // can be used to create different pools with elsewise identical options
              name: 'my-pool',
            },
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|jpg|gif|jpe?g|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets/img', to: 'assets/img' },
      { from: 'src/assets/webfonts', to: 'assets/webfonts' },
    ]),
    new FaviconsWebpackPlugin({
      logo: './src/assets/img/favicon.png',
      mode: 'webapp',
      manifest: '/src/manifest.json',
    }),
    new webpack.DefinePlugin({ API_HOST, IS_DEV_ENV }),
  ],
}
```