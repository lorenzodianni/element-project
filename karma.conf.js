module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      'jasmine-matchers',
      'commonjs',
    ],
    plugins: [
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-commonjs',
      'karma-coverage',
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
    ],
    files: [
      './src/**/*.js',
    ],
    exclude: [],
    preprocessors: {
      './src/**/*.js': ['babel', 'commonjs', 'coverage'],
    },
    reporters: [
      'progress',
      'coverage',
    ],
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
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'text-summary', subdir: '.', file: 'summary.txt'},
      ],
    },
  });
};
