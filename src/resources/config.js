const env = process.env.ENV || 'dev';
const config = require('../../env/' + env);

module.exports = config;
