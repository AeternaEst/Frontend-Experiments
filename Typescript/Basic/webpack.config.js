/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/App.ts'],
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: ['ts-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'webpack.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $clamp: path.resolve(path.join(__dirname, 'node_modules/clamp-js/clamp.js')),
    })
  ]
};