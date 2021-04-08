const config = require('../../resources/config');
const proxy = require('../generalHelper/proxyHelper');
const superagent = require('superagent');
const agent = superagent.agent();
const allureHelper = require('../../helper/allureHelper');

const ngApiHelper = function () {
    this.getNGCustomerLogin = async function () {
        return await agent
            .post(`${config.CAPITALIX.urlNGBo}/auth/bo-login`)
            .proxy(proxy)
            .send({ username: config.CAPITALIX.username, password: config.CAPITALIX.password })
            .then((res) => {
                allureHelper.logMe(`gerCustomerLogin res - ${JSON.stringify(res)}`);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`gerCustomerLogin err - ${JSON.stringify(err)}`);
                console.log('gerCustomerLogin err - ', err);
            });
    };

    this.searchUser = async function (token, userEmail) {
        return await agent
            .get(`${config.CAPITALIX.urlNGBo}/bo/customers/quick_search/${userEmail}`)
            .proxy(proxy)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                allureHelper.logMe(`searchUser res - ${JSON.stringify(res)}`);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`searchUser err - ${JSON.stringify(err)}`);
                console.log('searchUser err - ', err);
            });
    };
};
module.exports = new ngApiHelper();
