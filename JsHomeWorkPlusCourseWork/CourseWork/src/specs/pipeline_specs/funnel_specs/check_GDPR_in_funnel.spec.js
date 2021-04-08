const waitForSuccessDisplayedPageHelper = require('../../../helper/generalHelper/waitForSuccessDisplayedPageHelper');
const gdprDomainHelper = require('../../../helper/gdprDomainHelper');
const apiHelper = require('../../../helper/dashboardHelper/apiHelper');
const buildUrlHelper = require('../../../helper/generalHelper/buildUrlHelper');
const config = require('../../../resources/config');
const testrail = require('../../../helper/testrailHelper');
const constants = require('../../../resources/constants');

const loaderElement = element(by.id('loader'));
const button = element(by.id("lead-form-submit"));
const gdpr = element(by.xpath('(//label[@class="gdpr-label"])[1]'));

let token, funnel_uri, funnelUrl, domain;

describe('Check GDPR', function () {
    config.env === 'prod' && pending('Forse skip');

    beforeAll(function () {
        testrail.updateCase(8817, {custom_ui_automation_type: 1});
    });

    it('1723: Preconditions', async function () {
        token = await apiHelper.gerCustomerToken();
    });

    it('Get domains', async function () {
        let res = await gdprDomainHelper.getDomainIdWithGDPR(token, config.idDomainWithTurnOnGDPR);
        domain = res.body.data[0].domain;
        let funnelList = await gdprDomainHelper.getFunnelListByDomain(token, config.idDomainWithTurnOnGDPR);
        funnel_uri = funnelList.body.data[0].funnel_uri
    });

    it('1678: Build a URL funnel', async function () {
        funnelUrl = await buildUrlHelper.buildUrlHelper(domain, config.domainEnv, funnel_uri);
    });

    it('1678, 8817: Open Funnel', function () {
        waitForSuccessDisplayedPageHelper.waitForSuccessDisplayedPage(funnelUrl, constants.marketingParams.insertMarketingParamsTradeFW, loaderElement);

        expect(button.isPresent()).toBe(true);
        expect(gdpr.isPresent()).toBe(true);
    });

     /** check that gdpr disabled on funnel**/

    it('Get', async function () {
        let res = await gdprDomainHelper.getDomainIdWithGDPR(token, config.idDomainWithTurnOffGDPR);
        domain = res.body.data[0].domain;
        let list = await gdprDomainHelper.getFunnelListByDomain(token, config.idDomainWithTurnOffGDPR);
        funnel_uri = list.body.data[0].funnel_uri;
    });

    it('1678: Build a URL funnel', async function () {
        funnelUrl = await buildUrlHelper.buildUrlHelper(domain, config.domainEnv, funnel_uri);
    });

    it('1678, 8817: Open Funnel', async function () {
        waitForSuccessDisplayedPageHelper.waitForSuccessDisplayedPage(funnelUrl, constants.marketingParams.insertMarketingParamsTradeFW, loaderElement);
        console.log("funnelUrl", funnelUrl);

        expect(button.isPresent()).toBe(true);
        expect(gdpr.isPresent()).toBeFalsy();
    });
});
