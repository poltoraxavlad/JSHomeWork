const apiHelper = require('../../../helper/dashboardHelper/apiHelper');
const config = require('../../../resources/config');
const funnelsData = require('../../../test_data/funnels_data');
const userData = require('../../../test_data/userData');
const registerStepsHelper = require('../../../helper/registrationHelper/registerStepsHelper');
const welcomeBackModal = require('../../../pages/brandsSitesPages/capitalix/WelcomeBackModal');
const testrail = require('../../../helper/testrailHelper');
const constants = require('../../../resources/constants');
const buildUrlHelper = require('../../../helper/generalHelper/buildUrlHelper');
const waitForSuccessDisplayedPageHelper = require('../../../helper/generalHelper/waitForSuccessDisplayedPageHelper');
const expectedConditionsHelper = require('../../../helper/generalHelper/expectedConditionsHelper');

const randomUrl = userData.getRandomUrl();
const randomEmail = userData.getRandomEmail();
console.log("Lead email for Capitalix =", randomEmail);

const loaderElement = element(by.id('loader'));
const button = element(by.id("lead-form-submit"));
const deposit = element(by.xpath('//div[@class="container-fluid px-0"]'));

let token, funnel_uri, domain_id, domain_name, idFunnel, funnelUrl;

describe('Register customer on Capitalix after draft user', function () {
    config.env === 'prod' && pending('Forse skip');

    beforeAll(function () {
        testrail.updateCase(7178, {custom_ui_automation_type: 1});
    });

    it('1723: Preconditions', async function () {
        token = await apiHelper.gerCustomerToken();
    });

    it('6609: Create New funnel', async function () {
        funnelsData.funnelData.funnel_template = constants.template.bitcoin_code;
        funnelsData.funnelData.funnel_uri = `/${randomUrl}`;
        funnelsData.funnelData.title = randomUrl;
        funnelsData.funnelData.funnel_atts = ["redirect_brand_on_step_1"];
        funnelsData.funnelData.brand_id = config.idCapitalix;
        funnelsData.funnelData.domain_id = global.nfs_e2e_domain_id;
        funnelsData.funnelData.funnel_language = "en";
        funnelsData.funnelData.funnel_redirect = "deposit";

        const res = await apiHelper.createFunnel(token, funnelsData.funnelData);

        idFunnel = res.body.data[0].id;
        console.log("qqq", idFunnel);
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
    it('1678, 7178: Open Funnel', function () {
        waitForSuccessDisplayedPageHelper.waitForSuccessDisplayedPage(funnelUrl, constants.marketingParams.insertMarketingParamsCapitalix, loaderElement);

        expect(loaderElement.isPresent()).toBe(true);
        expect(button.isPresent()).toBe(true);
    });

    it('7178: Create lead without autologin', function () {
        registerStepsHelper.registerDataForOneStepFunnelWithoutPassword(randomEmail, constants.country.arabic);

        expect(loaderElement.isPresent()).toBe(true);
        expect(welcomeBackModal.waitWelcomeBackModal()).toBe(true);
    });

    it('7178: Create customer after draft user', function () {
        welcomeBackModal.writePassword();
        welcomeBackModal.clickSubmitButton();

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
