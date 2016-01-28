const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');

module.exports = {
  devtool: 'source-map',
  entry: path.join(SRC_DIR, 'rectangle'),
  output: {
    path: path.join(__dirname, 'dist', 'umd'),
    filename: 'index.js',
    library: 'ReactRectangle',
    libraryTarget: 'umd',
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: [
        SRC_DIR,
      ],
    }],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  resolve: { extensions: ['', '.js', '.jsx'] },
};
