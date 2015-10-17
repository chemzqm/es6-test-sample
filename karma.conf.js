var path = require('path')
// Karma configuration
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [ 'test/test.js' ],
    exclude: [ ],
    preprocessors: {
      'test/test.js': ['webpack']
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?optional[]=runtime'
          }
        ],
        preLoaders: [
          // instrument only testing sources with Istanbul
          {
            test: /\.js$/,
            include: path.resolve('lib/'),
            loader: 'babel-istanbul-instrumenter'
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text'},
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: 'lcov' },
        { type: 'cobertura', subdir: 'cobertura' }
      ]
    }
  })
}
