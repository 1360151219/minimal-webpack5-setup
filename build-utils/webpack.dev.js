const { DefinePlugin } = require('webpack')
const DotEnv = require('dotenv-webpack')
const path = require('path')
module.exports = {
  mode: "development",
  devtool: 'eval-source-map',
  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, "..", "./.env.development")
    })
  ]
};