const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

/* Use a function instead of an object to receive env variable */
module.exports = env => {
  console.log(env);
  if(!env) {
    env = {};
  }

  const { production, analyze } = env;

  return {
    entry: {
      main: "./src/index.jsx",
      admin: "./src/admin.jsx",
      contextSync: "./src/require-context/with-sync-imports.js",
      contextAsync: "./src/require-context/with-async-imports.js",
    },
    output: {
      path: path.resolve(__dirname, "dist") /* Filesystem path */,
      filename: "[name].js" /* No [hash] leaves entry file names untouched */,
      chunkFilename:
        "[name].[contenthash].js" /* Only hash non entry chunks. Contenthash creates a new hash per entry & asset type */,
      publicPath: __dirname + "/dist/" /* Browser path */,
    },
    watch: !production,
    devtool: production ? "none" : "inline-source-map",
    module: {
      rules: [
        { test: /\.txt$/, use: "raw-loader" },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [
        "*",
        ".js",
        ".jsx",
      ] /* Avoid specifing file extensions when importing. e.g import SharedComponent from './shared-component'; */,
    },
    plugins: [
      /* HtmlWebpackPlugin will create a new html file with javascript embedded at the bottom of the body tag &
       css in the header tag */
      new HtmlWebpackPlugin({
        filename: "../index.html",
        template: "src/template.html",
        hash: false /* Generates hash as as query string */,
      }),
      /* Extracts css into a seperate file */
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].css",
      }),
      /* Cleans the dist folder before copying new files */
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: analyze ? "server" : "disabled"
      }),
    ],
    mode: production ? "production" : "development",
    optimization: {
      splitChunks: {
        /* Will split all nodes modules into a vendors chunk */
        chunks: "all",
        cacheGroups: {
          defaultVendors: {
            /* Override chunk hash so vendors can be referenced */
            filename: "vendors.js",
          },
        },
      },
    },
  };
};
