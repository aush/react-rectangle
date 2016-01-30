const webpack = require('webpack');
const path = require('path');

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    reporters: process.env.CONTINUOUS_INTEGRATION ? ['mocha', 'coverage', 'coveralls'] : ['mocha', 'coverage'],
    coverageReporter: process.env.CONTINUOUS_INTEGRATION ? { type: 'lcov', dir: 'coverage/' } : { type: 'html', dir: 'coverage/' },
    // autoWatch: true,
    // singleRun: false,
    autoWatch: false,
    singleRun: true,
    browsers: process.env.TRAVIS ? [
      'Chrome_travis_ci',
    ] : [
      'Chrome',
    ],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },
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
          loader: 'babel',
          include: [
            path.join(__dirname, 'tests'),
            path.join(__dirname, 'src'),
          ],
        }],
        postLoaders: [{
          test: /\.jsx?$/,
          loader: 'istanbul-instrumenter',
          include: [
            path.join(__dirname, 'src'),
          ],
        }],
      },
      node: {
        fs: 'empty',
      },
      plugins: [
        new webpack.IgnorePlugin(/ReactContext/),
      ],
      resolve: { extensions: ['', '.js', '.jsx'] },
    },
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
