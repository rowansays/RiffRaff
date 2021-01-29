const shared = require('./shared.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: shared.homePath + '/index.js',
  target: 'web', // https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-704247909
  output: {
    filename: 'make.js',
    path: shared.makePath
  },
  module: {
    rules: [
      shared.esLoader,
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: shared.makePath,
    disableHostCheck: true, // https://stackoverflow.com/a/53907183/11855514
    hot: true,
    //compress: true,
    //port: 8080,
    open: 'Google Chrome',
  },
  plugins: [
    //new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: shared.makePath + '/index.html',
      //inject: 'head',
      //hash: true,

      //showErrors: true,
    })
  ]
}
