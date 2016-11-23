const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry:  ['babel-polyfill', './src/client/index.web.js'],
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'src/client')
        ],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-async-to-generator'
          ]
        }
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  plugins: [
      new CopyWebpackPlugin([
        { from: 'src/client/index.html' }
      ])
  ]
};
