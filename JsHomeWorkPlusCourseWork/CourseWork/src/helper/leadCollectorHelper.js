const config = require('../resources/config');
const proxy = require('./generalHelper/proxyHelper');
const allureHelper = require('../../helper/allureHelper');

const superagent = require('superagent');
const agent = superagent.agent();
const assert = require('assert');

const leadCollectorHelper = function () {
    this.getDataAboutUser = async function (userEmail) {
        return await agent
            .get(`${config.leadCollectorURL}/lead/${userEmail}`)
            .proxy(proxy)
            .then((res) => {
                assert.equal(200, res.status);
                return res;
            })
            .catch((err) => {
                console.log('getDataAboutUser err - ', err);
            });
    };
};

module.exports = new leadCollectorHelper();
