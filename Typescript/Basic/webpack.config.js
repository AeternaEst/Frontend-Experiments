/* eslint-disable */

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
    filename: 'main.js',
  }
};