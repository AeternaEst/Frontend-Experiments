const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.jsx',
    admin: './src/admin.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js' /* Generates hash in the filename */
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html",
      template: 'src/template.html',
      hash: false /* Generates hash as as query string */
    })
  ],
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
};