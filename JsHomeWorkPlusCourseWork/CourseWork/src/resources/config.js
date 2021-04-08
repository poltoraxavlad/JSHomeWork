const env = process.env.ENV || 'prod';
const config = require('../../env/' + env);

module.exports = config;
