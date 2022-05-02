const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, './src/index.js'),// 入口
  devtool: 'source-map',
  module: { // loader
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello HtmlWebpackPlugin2",
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new CleanWebpackPlugin()
  ]
};
