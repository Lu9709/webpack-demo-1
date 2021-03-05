const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.base.js')
module.exports = {
    mode:'development',
  ...base,
  module: {
    rules: [
     ...base.module.rules,
    //  先使用base.module.rules里的原则
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};