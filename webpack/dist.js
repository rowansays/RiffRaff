const shared = require('./shared.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  mode: 'production',
  entry: shared.entryPath,
  output: {
    filename: '[name]-[chunkhash].js',
    path: shared.buildPath
  },
  module: {
    rules: [
      shared.esLoader,
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new WebpackManifestPlugin()
  ]
}
