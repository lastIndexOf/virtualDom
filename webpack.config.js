const webpack = require('webpack')

module.exports = {
  entry: {
    main: __dirname + '/src/index.js',
    index: __dirname + '/src/js/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ]
      }
    ]
  }
}
