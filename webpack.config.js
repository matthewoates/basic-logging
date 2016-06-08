var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: __dirname + '/src/Blog',
  output: {
      library: 'Blog',
      libraryTarget: 'umd',
      path: __dirname + '/lib',
      filename: 'Blog.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0']
        },
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new WebpackNotifierPlugin() // notify user of build issues
  ],

  resolve: { extensions: ['', '.js'] },
  devtool: 'eval-source-map',
  watchOptions: { aggregateTimeout: 0 }
};
