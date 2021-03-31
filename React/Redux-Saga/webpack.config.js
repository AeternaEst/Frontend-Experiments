// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = [
  {
    name: "client",
    target: "web",
    mode: "development",
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    plugins: [new ESLintPlugin()],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".jsx", ".js", ".css"],
      fallback: {
        fs: false,
        tls: false,
        net: false,
        path: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,
        crypto: false,
      },
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "bundle.js",
    },
  },
  {
    name: "server",
    mode: "development",
    entry: "./src/server.ts",
    target: "node",
    module: {
      rules: [
        {
          test: /\.(ts)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      fallback: {
        fs: false,
        tls: false,
        net: false,
        path: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,
        crypto: false,
      },
    },
    output: {
      path: __dirname + "/dist",
      filename: "server.js",
    },
  },
];
