const path = require('path');

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    reporters: ['mocha'],
    // autoWatch: true,
    // singleRun: false,
    autoWatch: false,
    singleRun: true,
    browsers: [
      'Chrome',
      'PhantomJS',
    ],
    files: [
      './tests/**/*.spec.js*',
    ],
    preprocessors: {
      './tests/**/*.spec.js*': ['webpack'],
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [
            path.join(__dirname, 'tests'),
            path.join(__dirname, 'src'),
          ],
        }],
      },
      node: {
        fs: 'empty',
      },
      resolve: { extensions: ['', '.js', '.jsx'] },
    },
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
