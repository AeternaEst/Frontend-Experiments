const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* Use function instead of object to receive env variable */
module.exports = env => {
  console.log(env);

  const isProductionBuild = env && env.production;

  return { entry: {
    main: './src/index.jsx',
    admin: './src/admin.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js' /* Generates hash in the filename */
  },
  watch: !isProductionBuild,
  devtool: isProductionBuild ? 'none' : 'source-map',
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
    extensions: ['*', '.js', '.jsx'] /* Avoid specifing file extensions when importing. e.g import SharedComponent from './shared-component'; */
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html",
      template: 'src/template.html',
      hash: false /* Generates hash as as query string */
    })
  ],
  mode: isProductionBuild ? "production" : "development",
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}
};