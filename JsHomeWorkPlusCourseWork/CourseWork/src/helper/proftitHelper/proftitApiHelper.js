const config = require('../../resources/config');
const userData = require('../../test_data/userData');
const proxy = require('../generalHelper/proxyHelper');
const superagent = require('superagent');
const agent = superagent.agent();
const allureHelper = require('../helper/allureHelper');

const proftitApiHelper = function () {
    /**Proftit for TradeFW**/

    this.getItardeCustomerToken = async function () {
        return await agent
            .post(`${config.urlItradeProftit}/tokens`)
            .proxy(proxy)
            .send(userData.userDataForItradeProftit)
            .then((res) => {
                allureHelper.logMe(`gerCustomerToken res - ${JSON.stringify(res)}`);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`gerCustomerToken err - ${JSON.stringify(err)}`);
                console.log('gerCustomerToken err - ', err);
            });
    };

    this.getItradeUserInfo = async function ( token, userEmail) {
        return await agent
            .get(`${config.urlItradeProftit}/customers/?email=${userEmail}`)
            .proxy(proxy)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                allureHelper.logMe(`getUserInfo res - ${JSON.stringify(res)}`);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`getUserInfo err - ${JSON.stringify(err)}`);
                console.log('getUserInfo err - ', err);
            });
    };

    this.getItardeTradingAccountForex = async function (token, userID) {
        return await agent
            .get(`${config.urlItradeProftit}/customers/${userID}/tradingAccountsForex`)
            .proxy(proxy)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('getUserInfo err - ', err);
            });

    };

    this.updateItradeUserGroup = async function (token, userId, accountForexId) {
        return await agent
        .patch(`${config.urlItradeProftit}/customers/${userId}/tradingAccountsForex/${accountForexId}`)
            .proxy(proxy)
            .set('Authorization', "Bearer " + token)
            .send({"tradingAccountGroupId": 55})
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('getUserInfo err - ', err);
            });
    };

    /**Proftit for TradeLTD**/

    this.getMigCustomerToken = async function () {
        return await agent
            .post(`${config.urlMigProftit}/tokens`)
            .proxy(proxy)
            .send(userData.userDataForMigProftit)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('gerCustomerToken err - ', err);
            });
    };

    this.getMigUserInfo = async function (token, userEmail) {
        return await agent
            .get(`${config.urlMigProftit}/search/customers/?q=${userEmail}`)
            .proxy(proxy)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('getUserInfo err - ', err);
            });
    };

    this.getMigTradingAccountForex = async function (token, userID) {
        return await agent
            .get(`${config.urlMigProftit}/customers/${userID}/tradingAccountsForex`)
            .proxy(proxy)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('getUserInfo err - ', err);
            });

    };

    this.updateMigUserGroup = async function (token, userId, accountForexId) {
        return await agent
            .patch(`${config.urlMigProftit}/customers/${userId}/tradingAccountsForex/${accountForexId}`)
            .proxy(proxy)
            .set('Authorization', "Bearer " + token)
            .send({"tradingAccountGroupId": 9})
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('getUserInfo err - ', err);
            });
    };
};
module.exports = new proftitApiHelper();
