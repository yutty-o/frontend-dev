import webpack from "webpack"

export default {
  entry: './src/main.js',

  output: {
    path: './dist/',
    public: '/dist/',
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          name: '[name].[ext]?[hash]'
        }         
      }
    ]
  },

  plugin: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
