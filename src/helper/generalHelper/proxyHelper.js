var request = require('superagent');
// extend with Request#proxy()
require('superagent-proxy')(request);
// HTTP, HTTPS, or SOCKS proxy to use
var proxy = process.env.PROXY_ADDRESS;

module.exports = proxy;
