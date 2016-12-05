module.exports = function(config) {
  let configuration = {
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
      'karma-spec-reporter',
      'karma-babel-preprocessor',
      'karma-jasmine-html-reporter',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
    ],
    files: [
      './src/**/*.js',
    ],
    exclude: [],
    preprocessors: {
      './src/**/*.js': ['babel', 'commonjs'],
      './src/**/!(*spec).js': ['babel', 'commonjs', 'coverage'],
    },
    reporters: [
      'spec',
      'coverage',
      'kjhtml',
    ],
    port: 9876,
    colors: true,
    // values: config.LOG_DISABLE || config.LOG_ERROR
    // || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // values: 'Chrome', 'Firefox', 'Safari', 'ChromeCanary', 'IE', 'Opera', 'PhantomJS'
    browsers: ['Chrome', 'PhantomJS'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    concurrency: Infinity,
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'text-summary', subdir: '.', file: 'summary.txt'},
      ],
    },
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: false,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: false,  // do not print information about skipped tests
      showSpecTiming: true, // print the time elapsed for each spec
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015']
      },
    },
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
  }

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
