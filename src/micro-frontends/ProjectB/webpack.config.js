const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'projectB',
      filename: 'remoteEntry.js',
      exposes: {
        './ProjectB': './src/ProjectB.jsx' //未來有別的地方要引入 ProjectB<，就到 ./src/ProjectB.jsx 幫我找。
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}