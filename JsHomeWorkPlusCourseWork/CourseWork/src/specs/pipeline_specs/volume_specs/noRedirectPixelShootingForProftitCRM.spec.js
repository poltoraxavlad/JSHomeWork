const config = require('../../../resources/config');
const userData = require('../../../test_data/userData');
const volumeApiHelper = require('../../../helper/volumeHelper/volumeApiHelper');
const constants = require('../../../resources/constants');
const registerStepsHelper = require('../../../helper/registrationHelper/registerStepsHelper');

const campaignName = constants.campaignNameForNoRedirect.tradeFW;
const randomEmail = userData.getRandomEmail();

console.log("Lead email for tradeFW(no redirect pixel) =", randomEmail);

const button = element(by.id("lead-form-submit"));
const popup = element(by.xpath('//div[@class="nrp__block"]'));
const funnelURL = "https://mtxcapital.com/tradefw_no_redirect_voluum/?link=1048";

let volumeToken, campaignUrl, conversions, visits, cpid;

describe('Check no redirect volume for tradeFW Brand(Proftit CRM)', function () {
    (config.env === 'staging' || config.env === 'dev') && pending('Force skip');

    it('Get volume token', async function () {
        let res = await volumeApiHelper.getVolumeToken();

        volumeToken = res.body.token;

        expect(res.statusCode).toEqual(200)
    });

    it('Get old values visits and conversions', async function () {
        let res = await volumeApiHelper.getVolumeVisitAndConversionsByCompany(volumeToken, campaignName);

        campaignUrl = JSON.parse(res.text).rows[0].campaignUrl;
        conversions = res.body.totals.conversions;
        visits = res.body.totals.visits;
        cpid = JSON.parse(res.text).rows[0].campaignUrl.split('/')[3];

        console.log("Old visits value", visits);
        console.log("Old conversions value", conversions);

        expect(res.statusCode).toEqual(200)
    });

    it('Get funnel URL',function () {
        browser.get(funnelURL + '&cpid='+ cpid);

        expect(button.isPresent()).toBe(true);
    });

    it('7168: Create lead no autologin', async function () {
        await registerStepsHelper.registerDataForOneStepFunnelWithoutPassword(randomEmail, constants.country.netherlands);
        expect(popup.isPresent()).toBe(true);
    });

    it('Check visits', async function () {
        await volumeApiHelper.waitNewVisits(visits, volumeToken, campaignName);

        let res = await volumeApiHelper.getVolumeVisitAndConversionsByCompany(volumeToken, campaignName);

        expect(visits + 1).toEqual(res.body.totals.visits);
        expect(res.statusCode).toEqual(200)
    });

    it('Check conversions', async function () {
        await volumeApiHelper.waitNewConversions(conversions, volumeToken, campaignName);

        let res = await volumeApiHelper.getVolumeVisitAndConversionsByCompany(volumeToken, campaignName);

        expect(conversions + 1).toEqual(res.body.totals.conversions);
        expect(res.statusCode).toEqual(200);

        console.log("New visits value", res.body.totals.visits);
        console.log("New conversions value", res.body.totals.conversions)
    });

    afterAll(async function () {
        await browser.manage().deleteAllCookies();
    });
});
