const path = require('path')
const serverlessWebpack = require('serverless-webpack')

module.exports = {
  entry: serverlessWebpack.lib.entries,
  target: 'node',
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
  devtool: serverlessWebpack.lib.webpack.isLocal ? 'inline-cheap-module-source-map' : 'cheap-module-source-map',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  }
}
