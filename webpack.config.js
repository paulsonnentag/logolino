const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!autoprefixer!sass')
    },{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?name=[path][name].[ext]'
      ]
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./style")]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({}),
    new ExtractTextPlugin('styles.css')
  ]
};
