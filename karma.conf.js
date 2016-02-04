const webpack = require('webpack');
const path = require('path');

const _IS_CI_ = process.env.CONTINUOUS_INTEGRATION;
const _IS_TRAVIS_CI_ = process.env.TRAVIS;
const _IS_BUILDING_PACKAGE_ = process.env.NODE_ENV === 'production';

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'source-map-support'],
    reporters: _IS_CI_ ?
      ['mocha', 'coverage', 'coveralls'] :
      ['mocha', 'coverage'],
    coverageReporter: _IS_CI_ ?
      { type: 'lcov', dir: 'coverage/' } :
      { type: 'html', dir: 'coverage/' },
    autoWatch: _IS_CI_ ? false : true,
    singleRun: (_IS_CI_ || _IS_BUILDING_PACKAGE_) ? true : false,
    browsers: _IS_TRAVIS_CI_ ?
      ['Chrome_travis_ci'] :
      ['Chrome'],
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
