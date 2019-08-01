'use strict'

const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devServer = {
  host: 'http://127.0.0.1',
  port: 8080,
}

module.exports = {
  mode: 'development',
  context: resolve(__dirname, 'src'),
  entry: [`webpack-dev-server/client?${devServer.host}:${devServer.port}`, 'webpack/hot/only-dev-server', resolve(__dirname, 'src/index.tsx')],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'docs'),
    publicPath: `${devServer.host}:${devServer.port}/`,
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    contentBase: resolve(__dirname, 'src'),
    port: devServer.port,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      favicon: resolve(__dirname, 'docs/react.ico'),
    }),
  ],
}
