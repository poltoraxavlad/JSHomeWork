const waitForSuccessDisplayedPageHelper = require('../../../helper/generalHelper/waitForSuccessDisplayedPageHelper');
const apiHelper = require('../../../helper/dashboardHelper/apiHelper');
const config = require('../../../resources/config');
const funnelsData = require('../../../test_data/funnels_data');
const userData = require('../../../test_data/userData');
const testrail = require('../../../helper/testrailHelper');
const constants = require('../../../resources/constants');
const buildUrlHelper = require('../../../helper/generalHelper/buildUrlHelper');

const randomUrl = userData.getRandomUrl();
const scriptF = element(by.css('script'));
const loaderElement = element(by.id('loader'));

let token, funnel_uri, domain_id, domain_name, idFunnel, funnelUrl;

describe('Check funnelUrl after create funnel', function () {
    config.env === 'prod' && pending('Forse skip');
    beforeAll(function () {
        testrail.updateCase(1678, {custom_ui_automation_type: 1, refs: 'NFS-411, NFS-677, NFS-678'});
    });

    it('1723: Preconditions', async function () {
        token = await apiHelper.gerCustomerToken();
    });

    it('Create funnel', async function () {
        funnelsData.funnelData.funnel_template = constants.template.tesler;
        funnelsData.funnelData.funnel_uri = `/${randomUrl}`;
        funnelsData.funnelData.title = randomUrl;
        funnelsData.funnelData.funnel_atts = ["customer_on_step_1"];
        funnelsData.funnelData.brand_id = config.idTradeFW;
        funnelsData.funnelData.domain_id = global.nfs_e2e_domain_id;
        funnelsData.funnelData.funnel_language = "ar";
        funnelsData.funnelData.funnel_redirect = "deposit";

        const res = await apiHelper.createFunnel(token, funnelsData.funnelData);

        idFunnel = res.body.data[0].id;
        funnel_uri = res.body.data[0].funnel_uri;
        domain_id = res.body.data[0].domain_id;
    });

    it('1678: Build a URL funnel and open a funnel URL', async function () {
        const domainsName = await apiHelper.getDomaiId(token, constants.domainSize.size, domain_id);
        domain_name = domainsName.domain;

        funnelUrl = await buildUrlHelper.buildUrlHelper(domain_name, config.domainEnv, funnel_uri);
        console.log("Test Funnel URL", funnelUrl);
    });

    it('1678: Open Funnel', function () {
        waitForSuccessDisplayedPageHelper.waitForSuccessDisplayedPage(funnelUrl, constants.marketingParams.insertMarketingParamsTradeFW, loaderElement);

        expect(loaderElement.isPresent()).toBe(true);
        expect(scriptF.isPresent()).toBe(true);
    });

    afterAll(async function () {
        let token = await apiHelper.gerCustomerToken();
        await apiHelper.deleteFunnel(token, idFunnel);
        await browser.manage().deleteAllCookies();
    });
});
