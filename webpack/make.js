const shared = require('./shared.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob');

const globResult = glob.sync(shared.makePath + '/**/*.html')
const htmlPlugins = !Array.isArray(globResult) ? [] : globResult.map(f => {
  return new HtmlWebpackPlugin({
    template: f,
    filename: f
  })
})

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
        test: /\.(s)?css$/,
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
  plugins: htmlPlugins
}
