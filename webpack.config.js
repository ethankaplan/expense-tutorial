var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  rules: [{
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude:/(node_modules|bower_components)/,
   query: {
    presets: ["@babel/preset-env","@babel/react"]
   }
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  }]
 }
}