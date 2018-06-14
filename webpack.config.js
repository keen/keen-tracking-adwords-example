const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './lib/app.js',

  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `example.js`,
    libraryTarget: 'umd',
  },

  module: {

    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, 'lib'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
      },
    ],

  },

  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
  },

  optimization: {
    minimize: !!process.env.OPTIMIZE_MINIMIZE,
  },

  devtool: 'source-map',

  context: __dirname,

  // stats: 'verbose',

  plugins: [],

  mode: process.env.NODE_ENV,

  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    openPage: '?ad_id=123', // dummy example param
    open: true,
    inline: true,
    hot: false,
    watchContentBase: true,
  },

};
