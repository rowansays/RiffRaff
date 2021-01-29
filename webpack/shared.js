const path = require('path')

module.exports = {
  codePath: path.resolve(__dirname, '..', 'src'),
  distPath: path.resolve(__dirname, '..', 'dist'),
  homePath: path.resolve(__dirname, '..'),
  makePath: path.resolve(__dirname, '..', 'make'),
  esLoader: {
    test: /\.(js)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: [
        ['@babel/preset-env', {
          corejs: 3,
          useBuiltIns: 'usage'
        }]
      ]
    }
  }
}
