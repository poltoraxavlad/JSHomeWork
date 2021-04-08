const userData = require('../../test_data/userData');
const superagent = require('superagent');
const config = require('../../resources/config');
const agent = superagent.agent();
const assert = require('assert');
const constants = require('../../resources/constants');
const domainData = require('../../test_data/domainData');
const allureHelper = require('../../helper/allureHelper');

const apiHelper = function () {
    this.gerCustomerToken = async function () {
        return await agent
            .post(`${config.apiURL}/oauth/v2/token`)
            .send(userData.customer)
            .then((res) => {
                allureHelper.logMe(`gerCustomerToken res - ${JSON.stringify(res)}`);
                assert.equal(200, res.status);
                return res.body.access_token;
            })
            .catch((err) => {
                allureHelper.logMe(`gerCustomerToken err - ${JSON.stringify(err)}`);
                console.log('gerCustomerToken err - ', err);
            });
    };

    this.createFunnel = async function (token, funnels_data) {
        return await agent
            .post(`${config.apiURL}/api/v1/funnels/funnels`)
            .set('Authorization', "Bearer " + token)
            .send(funnels_data)
            .then((res) => {
                allureHelper.logMe(`createFunnel res - ${JSON.stringify(res)}`);
                assert.equal(201, res.status);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`createFunnel err - ${JSON.stringify(err)}`);
                console.log('createFunnel error - ', err);
            });
    };

    this.getFunnelList = async function (token, size) {
        return await agent
            .get(`${config.apiURL}/api/v1/funnels/funnels?page=1&size=${size}&is_cms_funnel=false`)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                allureHelper.logMe(`getFunnelList res - ${JSON.stringify(res)}`);
                assert.equal(200, res.status);
                let arraySize = res.body.pagination.size;
                for (let id = 0; id < arraySize; id++) {
                    return res.body.data;
                }
            })
            .catch((err) => {
                allureHelper.logMe(`getFunnelList err - ${JSON.stringify(err)}`);
                console.log('getFunnelList err- ', err);
            });
    };

    this.getDomaiId = async function (token, size, domainFunnelId) {
        return await agent
            .get(`${config.apiURL}/api/v1/funnels/domains?page=1&size=${size}`)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                allureHelper.logMe(`getDomainId res - ${JSON.stringify(res)}`);
                assert.equal(200, res.status);
                let domainSite = res.body.pagination.total;
                for (let id = 0; id < domainSite; id++) {
                    const domainId = res.body.data[id].id;
                    if (domainId === domainFunnelId) {
                        return  res.body.data[id];
                    }
                }
            })
            .catch((err) => {
                allureHelper.logMe(`getDomainId err - ${JSON.stringify(err)}`);
                console.log('getDomainId - ', err);
            });
    };

    this.createDomain = async function (token) {
        return await agent
            .post(`${config.apiURL}/api/v1/funnels/domains`)
            .set('Authorization', "Bearer " + token)
            .send(domainData.domainData)
            .then((res) => {
                allureHelper.logMe(`createDomain res - ${JSON.stringify(res)}`);
                assert.equal(201, res.status);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`createDomain err - ${JSON.stringify(err)}`);
                console.log('createDomain error - ', err);
            });
    };

    this.getStatusVoluume= async function (idUser) {
        return await agent
            .get(`https://tradefw.mtxcapital.com/api/v1/pixel/send-create-conversion-request?contact=${idUser}`)
            .send()
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(`${idUser} error statusCode =`, err.status);
            });
    };

    this.deleteFunnel = async function (token, funnelId) {
        return await agent
            .del(`${config.apiURL}/api/v1/funnels/funnels/${funnelId}`)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                allureHelper.logMe(`deleteFunnel res - ${JSON.stringify(res)}`);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`deleteFunnel err - ${JSON.stringify(err)}`);
                console.log("deleteFunnel error status=", err.status);
            });
    };

    this.searchDomain = async function (token, domainName) {
        return await agent
            .get(`${config.apiURL}/api/v1/funnels/domains?page=1&size=0&sort=-id&domain=${domainName}`)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                allureHelper.logMe(`searchDomain res - ${JSON.stringify(res)}`);
                let domainSite = res.body.pagination.total;
                if (domainSite !== 0) {
                    for (let id = 0; id < domainSite; id++) {
                        const domain = res.body.data[id].domain;
                        if (domain === domainName) {
                            return res;
                        }
                    }
                } else {
                    return domainName;
                }
            })
            .catch((err) => {
                allureHelper.logMe(`searchDomain err - ${JSON.stringify(err)}`);
                console.log('searchDomain - ', err);
            });
    }

    this.getTemplateInfo = async function (token, template) {
        return await agent
            .get(`${config.apiURL}/api/v1/funnels/funnels?size=100&funnel_template=${template}`)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                return res
            })
            .catch((err) => {
                allureHelper.logMe(`getTemplateInfo err - ${JSON.stringify(err)}`);
                console.log('getTemplateInfo - ', err);
            });
    };
};

module.exports = new apiHelper();
