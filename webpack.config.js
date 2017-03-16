'use strict'

const webpack = require('webpack')
const isProdEnvironment = (process.env.NODE_ENV === 'production')

module.exports = {
  cache:    true,
  devtool: isProdEnvironment ? 'source-map' : 'cheap-module-eval-source-map',

  context: __dirname,
  entry: [
    'babel-polyfill',
    './src/app/client/renderer.js',
  ],
  output: {
    filename: 'bundle.js',
    path: 'src/app/assets/javascript',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: (function configurePlugins() {
    let plugins = [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
    ]

    if (isProdEnvironment) {
      plugins = plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false,
          compress: {
            warnings: false,
          },
        }),
      ])
    }

    return plugins
  }()),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
    ],
  },
}
