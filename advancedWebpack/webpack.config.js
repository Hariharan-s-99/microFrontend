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
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Resolves @import and url()
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"),
                  require("postcss-prefix-selector")({
                    prefix: ".webpack", // Your app's container class
                    transform: function (prefix, selector, prefixedSelector) {
                      // Skip already-prefixed selectors or global tags
                      if (
                        selector.startsWith(prefix) ||
                        selector.startsWith("html") ||
                        selector.startsWith("body") ||
                        selector.startsWith(":root") ||
                        selector === "*"
                      ) {
                        console.log(selector, "selector")
                        return selector;
                      }
                      console.log(`${prefix} ${selector}`, "`${prefix} ${selector}`")
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
    port: 3000,
    hot: true,
  },
};
