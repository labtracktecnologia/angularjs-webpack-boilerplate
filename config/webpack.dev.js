const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

// common config
const common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(common.config, {
  output: {
    filename: '[name].[hash:20].js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'], exclude: /node_modules/ },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV)
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  }
});
