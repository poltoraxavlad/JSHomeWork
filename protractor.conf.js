const { onPrepare } = require('./src/OnPrepare');

exports.config = {
  allScriptsTimeout: 40000,
  getPageTimeout: 40000,
  specs: ['./src/**/*.specs.js'],
  capabilities: {
    browserName: 'chrome',
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 800000,
  },
  onPrepare,
};

