const superagent = require('superagent');
const config = require('../resources/config');
const agent = superagent.agent();
const allureHelper = require('../helper/allureHelper');

const gdprDomainHelper = function () {
    this.getDomainIdWithGDPR = async function (token, id) {
        return await agent
            .get(`${config.apiURL}/api/v1/funnels/domains/${id}`)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                allureHelper.logMe(`getDomainId res - ${JSON.stringify(res)}`);
                return res
            })
            .catch((err) => {
                console.log('getDomainId - ', err);
            });
    };

    this.getFunnelListByDomain = async function (token, id) {
        return await agent
            .get(`${config.apiURL}/api/v1/funnels/funnels?page=1&size=25&domain_id=${id}&sort=-id`)
            .set('Authorization', "Bearer " + token)
            .then((res) => {
                allureHelper.logMe(`getDomainId res - ${JSON.stringify(res)}`);
                let funnelSize = res.body.pagination.total;
                for (let id = 0; id < funnelSize; id++) {
                        return res;
                }
            })
            .catch((err) => {
                console.log('getDomainId - ', err);
            });
    };
};

module.exports = new gdprDomainHelper();
