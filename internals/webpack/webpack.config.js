/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = ({debug = false} = {}) => {

  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(debug ? 'development' : 'production'),
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'WalkAround',
      template: 'src/html/index.ejs',
      filename: 'index.html',
      hash: true,
      inject: 'body'
    })
  ];

  if (!debug){
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: 'source-map',
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    );
  }

  return {
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      },
      port: 7001,
      https: true,
      historyApiFallback: true
    },
    target: 'web',
    devtool: 'source-map',
    entry: './src/application.jsx',
    output: {
      path: path.resolve(__dirname, '../../www'),
      filename: debug ? 'bundle.js' : 'bundle.min.js',
      publicPath: '/'
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, '../../src')
          ],
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: {
            compact: true,
            presets: [
              ['es2015', {modules: false}],
              'stage-0',
              'react'
            ],
            plugins: [
              'transform-async-to-generator',
              'transform-decorators-legacy'
            ]
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: require.resolve('style-loader'),
            use: require.resolve('css-loader')
          })
        },
        {
          test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|mp4|avi|mov)$/,
          loader: require.resolve('file-loader')
        }
      ]
    },
    performance: {
      hints: false
    },
    resolve: {
      modules: [path.resolve('./src'), 'node_modules'],
      extensions: ['*', '.js', '.jsx']
    },
  };
};
