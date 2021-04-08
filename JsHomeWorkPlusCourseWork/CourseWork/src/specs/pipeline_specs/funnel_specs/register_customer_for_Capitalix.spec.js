const apiHelper = require('../../../helper/dashboardHelper/apiHelper');
const config = require('../../../resources/config');
const funnelsData = require('../../../test_data/funnels_data');
const userData = require('../../../test_data/userData');
const registerStepsHelper = require('../../../helper/registrationHelper/registerStepsHelper');
const loaderData = require('../../../pages/funnelsPages/LoaderPage');
const testrail = require('../../../helper/testrailHelper');
const constants = require('../../../resources/constants');
const expectedConditionsHelper = require('../../../helper/generalHelper/expectedConditionsHelper');
const buildUrlHelper = require('../../../helper/generalHelper/buildUrlHelper');
const waitForSuccessDisplayedPageHelper = require('../../../helper/generalHelper/waitForSuccessDisplayedPageHelper');

const randomUrl = userData.getRandomUrl();
const randomEmail = userData.getRandomEmail();
console.log("Customer email for Capitalix =", randomEmail);

const loaderElement = element(by.id('loader'));
const button = element(by.id("lead-form-submit"));
const deposit = element(by.xpath('//div[@class="container-fluid px-0"]'));

let token, funnel_uri, domain_id, domain_name, idFunnel, funnelUrl;


describe('Register customer for Capitalix with autologin', function () {
    config.env === 'prod' && pending('Forse skip');

    beforeAll(function () {
        testrail.updateCase(7179, { custom_ui_automation_type: 1 });
    });

    it('1723: Preconditions', async function () {
        token = await apiHelper.gerCustomerToken();
    });

    it('6609: Create New funnel', async function () {
        funnelsData.funnelData.funnel_template = constants.template.tesler;
        funnelsData.funnelData.funnel_uri = `/${randomUrl}`;
        funnelsData.funnelData.title = randomUrl;
        funnelsData.funnelData.funnel_atts = ["customer_on_step_1"];
        funnelsData.funnelData.brand_id = config.CAPITALIX.idCapitalix;
        funnelsData.funnelData.domain_id = global.nfs_e2e_domain_id;
        funnelsData.funnelData.funnel_language = "en";
        funnelsData.funnelData.funnel_redirect = "deposit";

        const res = await apiHelper.createFunnel(token, funnelsData.funnelData);

        idFunnel = res.body.data[0].id;
        funnel_uri = res.body.data[0].funnel_uri;
        domain_id = res.body.data[0].domain_id;

        expect(res.body.data[0].funnel_uri).toEqual(`/${randomUrl}`);
    });

    it('1678: Build a URL funnel', async function () {
        const domainsName = await apiHelper.getDomaiId(token, constants.domainSize.size, domain_id);
        domain_name = domainsName.domain;

        funnelUrl = await buildUrlHelper.buildUrlHelper(domain_name, config.domainEnv, funnel_uri);
        console.log("Test Funnel URL", funnelUrl);
    });

    it('1678, 7179: Open Funnel', function () {
        waitForSuccessDisplayedPageHelper.waitForSuccessDisplayedPage(funnelUrl, constants.marketingParams.insertMarketingParamsCapitalix, loaderElement);

        expect(button.isPresent()).toBe(true);
        expect(loaderElement.isPresent()).toBe(true);
    });

    it('7179: Create lead without autologin', function () {
        registerStepsHelper.registerDataForOneStepFunnelWithPassword(randomEmail);
        expect(loaderData.getGeneralLogo);

        expectedConditionsHelper.waitElementToBeClickable(deposit);
        expect(deposit.isPresent()).toBe(true);
    });

    afterAll(async function () {
        let token = await apiHelper.gerCustomerToken();
        let res = await apiHelper.deleteFunnel(token, idFunnel);

        expect(res.text).toEqual(constants.deleteStatus.DELETE_STATUS);

        await browser.manage().deleteAllCookies();
    });
});
