const waitForSuccessDisplayedPageHelper = require('../../../helper/generalHelper/waitForSuccessDisplayedPageHelper');
const apiHelper = require('../../../helper/dashboardHelper/apiHelper');
const config = require('../../../resources/config');
const funnelsData = require('../../../test_data/funnels_data');
const loaderData = require('../../../pages/funnelsPages/LoaderPage');
const firstStepRegistration = require('../../../pages/brandsSitesPages/tradeFW/modals/FirstStepRegistrationModal');
const myAccountPage = require('../../../pages/brandsSitesPages/tradeFW/MyAccountPage');
const userData = require('../../../test_data/userData');
const registerStepsHelper = require('../../../helper/registrationHelper/registerStepsHelper');
const registerHelperTradeFw = require('../../../helper/registrationHelper/registerHelperTradeFw');
const testrail = require('../../../helper/testrailHelper');
const constants = require('../../../resources/constants');
const buildUrlHelper = require('../../../helper/generalHelper/buildUrlHelper');

const randomUrl = userData.getRandomUrl();
const randomEmail = userData.getRandomEmail();
console.log("Lead email for TradeFW =", randomEmail);

const loaderElement = element(by.id('loader'));
const button = element(by.id("lead-form-submit"));

let token, funnel_uri, domain_id, domain_name, idFunnel, funnelUrl;

describe('Register customer on TradeFW after lead without autologin', function () {
    config.env === 'prod' && pending('Forse skip');

    beforeAll(function () {
        testrail.updateCase(7165, {custom_ui_automation_type: 1});
    });

    it('1723: Preconditions', async function () {
        token = await apiHelper.gerCustomerToken();
    });

    it('6609: Create New funnel', async function () {
        funnelsData.funnelData.funnel_template = constants.template.bitcoin_code;
        funnelsData.funnelData.funnel_uri = `/${randomUrl}`;
        funnelsData.funnelData.title = randomUrl;
        funnelsData.funnelData.funnel_atts = ["redirect_brand_on_step_1"];
        funnelsData.funnelData.brand_id = config.idTradeFW;
        funnelsData.funnelData.domain_id = global.nfs_e2e_domain_id;
        funnelsData.funnelData.funnel_language = "en";
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

    it('1678, 7165: Open Funnel', function () {
        waitForSuccessDisplayedPageHelper.waitForSuccessDisplayedPage(funnelUrl, constants.marketingParams.insertMarketingParamsTradeFW, loaderElement);

        expect(loaderElement.isPresent()).toBe(true);
        expect(button.isPresent()).toBe(true);
    });

    it('7165: Create lead without autologin', function () {
        registerStepsHelper.registerDataForOneStepFunnelWithoutPassword(randomEmail, constants.country.arabic);

        expect(loaderData.getTradefwLogo());
        expect(firstStepRegistration.getTradefwTextOnFirstStepRegister()).toBeTruthy();

        firstStepRegistration.closeWarningPopup();
        firstStepRegistration.waitRegistrationDataonFirstStep(randomEmail);
    });

    it('7165: Refill the first registration step', function () {
        registerHelperTradeFw.refillDataOnFirstStepTradeFW();
        firstStepRegistration.submitRegistrationOnFirstStep();

        expect(myAccountPage.checkMT4FieldIsEmpty()).toBeTruthy();
    });

    afterAll(async function () {
        let token = await apiHelper.gerCustomerToken();
        let res = await apiHelper.deleteFunnel(token, idFunnel);

        expect(res.text).toEqual(constants.deleteStatus.DELETE_STATUS);

        await browser.manage().deleteAllCookies();
    });
});

