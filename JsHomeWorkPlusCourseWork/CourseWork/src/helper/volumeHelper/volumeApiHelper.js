const config = require('../../resources/config');
const userData = require('../../test_data/userData');
const superagent = require('superagent');
const agent = superagent.agent();
const allureHelper = require('../../helper/allureHelper');

const volumeApiHelper = function () {
    this.getVolumeToken = async function () {
        return await agent
            .post(`${config.volumeUrl}/auth/session`)
            .send({deviceId: config.userDataForVolume.deviceId,
                email: config.userDataForVolume.email,
                password: config.userDataForVolume.password})
            .then((res) => {
                allureHelper.logMe(`getVolumeToken res - ${JSON.stringify(res)}`);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`getVolumeToken err - ${JSON.stringify(err)}`);
                console.log('getVolumeToken err - ', err);
            });
    };

    this.getVolumeVisitAndConversionsByCompany = async function (token, campaign_name) {
        return await agent
            .get(`${config.volumeUrl}/report?from=${userData.getdata()}&` +
                `filter=${campaign_name}&` +
                `groupBy=campaign&` +
                `sort=conversions&` +
                `column=visits&` +
                `column=campaignName&` +
                `column=campaignUrl`)
            .set({"cwauth-token": token})
            .then((res) => {
                allureHelper.logMe(`getVolumeVisitAndConversionsByCompany res - ${JSON.stringify(res)}`);
                return res;
            })
            .catch((err) => {
                allureHelper.logMe(`getVolumeVisitAndConversionsByCompany err - ${JSON.stringify(err)}`);
                console.log('getVolumeVisitAndConversionsByCompany err - ', err);
            });
    };

    this.waitNewVisits = async  function (visits, volumeToken, volumeFilterData) {
        for (let i = 1; i <= 15; i++) {
            let res = await this.getVolumeVisitAndConversionsByCompany(volumeToken, volumeFilterData);
            if (res.body.totals.visits !== visits + 1) {
                browser.sleep(1000);
                console.log(`Wait for new visits value for ${i} second`, "visits=", res.body.totals.visits);
            } else break;
        }
    };

    this.waitNewConversions = async  function (conversions, volumeToken, volumeFilterData) {
        for (let i = 1; i <= 15; i++) {
            let res = await this.getVolumeVisitAndConversionsByCompany(volumeToken, volumeFilterData);
            if (res.body.totals.conversions !== conversions + 1) {
                browser.sleep(1000);
                console.log(`Wait for new conversions value for ${i} second`,"conversions=", res.body.totals.conversions);
            } else break;
        }
    }
};

module.exports = new volumeApiHelper();
