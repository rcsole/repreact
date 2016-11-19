var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['./lib/js/src/index.js']
  },
  output: {
    path: './lib/js/webpack/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './template.html'
  })]
}
