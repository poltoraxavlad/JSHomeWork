const waitForSuccessDisplayedPageHelper = require('../../../helper/generalHelper/waitForSuccessDisplayedPageHelper');
const apiHelper = require('../../../helper/dashboardHelper/apiHelper');
const config = require('../../../resources/config');
const funnelsData = require('../../../test_data/funnels_data');
const myAccountPage = require('../../../pages/brandsSitesPages/tradeFW/MyAccountPage');
const firstStepRegistration = require('../../../pages/brandsSitesPages/tradeFW/modals/FirstStepRegistrationModal');
const userData = require('../../../test_data/userData');
const registerStepsHelper = require('../../../helper/registrationHelper/registerStepsHelper');
const testrail = require('../../../helper/testrailHelper');
const constants = require('../../../resources/constants');
const buildUrlHelper = require('../../../helper/generalHelper/buildUrlHelper');

const randomUrl = userData.getRandomUrl();
const randomEmail = userData.getRandomEmail();
console.log("Lead email for TradeFW =",randomEmail);

const loaderElement = element(by.id('loader'));
const button = element(by.id("lead-form-submit"));

let token, funnel_uri, domain_id, domain_name, idFunnel, funnelUrl;

describe('Register_lead_with_autologin on TradeFW', function () {
    config.env === 'prod' && pending('Forse skip');
    config.env === 'dev' && pending('Forse skip');


    beforeAll(function () {
        testrail.updateCase(7165, { custom_ui_automation_type: 1 });
    });

    it('1723: Preconditions', async function () {
        token = await apiHelper.gerCustomerToken();
    });

    it('6609: Create funnel', async function () {
        funnelsData.funnelData.funnel_template = constants.template.beyong;
        funnelsData.funnelData.funnel_uri = `/${randomUrl}`;
        funnelsData.funnelData.title = randomUrl;
        funnelsData.funnelData.funnel_atts = ["lead_password_autologin"];
        funnelsData.funnelData.brand_id = config.idTradeFW;
        funnelsData.funnelData.domain_id = global.nfs_e2e_domain_id;
        funnelsData.funnelData.funnel_language = "es";
        funnelsData.funnelData.funnel_redirect = "account";

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

    it('1678, 7167: Open Funnel', function () {
        waitForSuccessDisplayedPageHelper.waitForSuccessDisplayedPage(funnelUrl, constants.marketingParams.insertMarketingParamsTradeFW, loaderElement);

        expect(loaderElement.isPresent()).toBe(true);
        expect(button.isPresent()).toBe(true);
    });

    it('7167: Create lead with autologin', function () {
        registerStepsHelper.registerDataForOneStepFunnelWithPassword(randomEmail);

        myAccountPage.getTradefwTextOnSecondStepRegister();
        firstStepRegistration.closePopup();
        myAccountPage.getTradefwTextLink();
        browser.refresh();

        expect(myAccountPage.checkMT4FieldIsEmpty()).toBeTruthy();
    });

    afterAll(async function () {
        let token = await apiHelper.gerCustomerToken();
        let res = await apiHelper.deleteFunnel(token, idFunnel);
        expect(res.text).toEqual(constants.deleteStatus.DELETE_STATUS);
        await browser.manage().deleteAllCookies();
    });
});

