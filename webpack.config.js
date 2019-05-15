const path = require("path");
const webpack = require("webpack");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

let config = {
  entry: path.join(__dirname, "src", "index.jsx"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: { plugins: [postcssPresetEnv(), cssnano] }
          }
        ]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new ExtractCssChunks({
      filename: "[name].css"
    })
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};

module.exports = config;