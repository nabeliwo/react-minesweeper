'use strict'

const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  context: resolve(__dirname, 'src'),
  entry: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './index.tsx'],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'docs'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    port: '8080',
    hot: true,
    contentBase: resolve(__dirname, 'src'),
    publicPath: '/',
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
