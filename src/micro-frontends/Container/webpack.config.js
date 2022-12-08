const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        projectA: 'projectA@http://localhost:8081/remoteEntry.js',
        projectB: 'projectA@http://localhost:8082/remoteEntry.js',
      } }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
}