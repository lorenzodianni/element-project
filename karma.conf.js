module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'commonjs'],
    files: [
      './src/**/*.js',
    ],
    exclude: [],
    preprocessors: {
      './src/**/*.js': ['babel', 'commonjs'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    // values: config.LOG_DISABLE || config.LOG_ERROR
    // || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // values: 'Chrome', 'Firefox', 'Safari', 'ChromeCanary', 'IE', 'Opera', 'PhantomJS'
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity,
  });
};
