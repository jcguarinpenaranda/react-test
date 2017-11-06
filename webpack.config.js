const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.jsx'),
  output: {
    path: path.resolve('build'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      filename: 'index.html',
      inject: false,
    }),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    loaders,
  },
};
