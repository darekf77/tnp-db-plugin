var webpack = require('webpack'),
  path = require('path'),
  fs = require('fs');

// var WebpackOnBuildPlugin = require('on-build-webpack');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: __dirname + '/bundle',
    libraryTarget: "commonjs",
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loaders: ['ts-loader']
      },
      // { test: /\.json$/, loaders: ['json-loader'] }
    ]
  },
  externals: nodeModules,
  node: {
    fs: "empty",
    __dirname: false,
    __filename: false
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: true
    //   }
    // }),
    // new WebpackOnBuildPlugin(function (stats) {
    //   // Do whatever you want...
    // }),
  ]
}