const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"),
                  require("postcss-prefix-selector")({
                    prefix: ".webpack",
                    transform: function (prefix, selector, prefixedSelector) {
                      if (
                        selector.startsWith(prefix) ||
                        selector.startsWith("html") ||
                        selector.startsWith("body") ||
                        selector.startsWith(":root") ||
                        selector === "*"
                      ) {
                        return selector;
                      }
                      return `${prefix} ${selector}`;
                    },
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                getLocalIdent: (context, localIdentName, localName, options) => {
                  const hash = require('crypto')
                    .createHash('md5')
                    .update(context.resourcePath + localName)
                    .digest('hex')
                    .substring(0, 5);

                  if (localName === 'webpack') return localName;
                  return `${localName}_${hash}`;
                }
              },
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {

              postcssOptions: {
                plugins: [
                  require("autoprefixer"),
                  require("postcss-prefix-selector")({
                    prefix: ".webpack",
                    transform: function (prefix, selector, prefixedSelector) {
                      // This runs after CSS modules has created hashed class names
                      if (
                        selector.startsWith(prefix) ||
                        selector.startsWith("html") ||
                        selector.startsWith("body") ||
                        selector.startsWith(":root") ||
                        selector === "*"
                      ) {
                        return selector;
                      }
                      return `${prefix} ${selector}`;
                    },
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3001,
    hot: true,
  },
};