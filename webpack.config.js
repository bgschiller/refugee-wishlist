var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/public/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.ejs$/,
        loader: 'underscore-template-loader',
        query: {
          interpolate : '\\{\\[(.+?)\\]\\}',
          evaluate: '\\{%([\\s\\S]+?)%\\}',
          escape : '\\{\\{(.+?)\\}\\}'
        }
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
}
