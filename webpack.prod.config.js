'use strict'

const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  context: resolve(__dirname, 'src'),
  entry: './index.tsx',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'docs'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
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
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'src/index.html') }),
    new webpack.DefinePlugin({
      template: resolve(__dirname, 'src/index.html'),
      favicon: resolve(__dirname, 'docs/react.ico'),
    }),
  ],
}
