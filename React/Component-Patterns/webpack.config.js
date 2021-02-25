/* eslint-disable @typescript-eslint/no-var-requires */
// const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  devtool: "inline-source-map",
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "bundle.js"
  }
};

// plugins: [
//   new ESLintPlugin({
//     context: __dirname,
//     eslintPath: `${__dirname}/node_modules/.bin/eslint`,
//     extensions: ["ts", "tsx"],
//     files: "./src/**",
//     fix: true,
//     exclude: "node_modules"
//   })
// ]
