const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      }
    ]
  }
}
