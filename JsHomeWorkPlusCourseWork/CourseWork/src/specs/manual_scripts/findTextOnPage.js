const templatePage = require('../../pages/dashboardPages/TemplatePage');
const apiHelper = require('../../helper/dashboardHelper/apiHelper');
const config = require('../../resources/config');
const constants = require('../../resources/constants');
const buildUrlHelper = require('../../helper/generalHelper/buildUrlHelper');

const templateData = require('../../test_data/templateData');

let token, funnel_uri, domain_id, domain_name, idFunnel, funnelUrl, templateInfo, funnelLanguage, templateList,
    templateName, funnel, getDomain, domainConstructor;


describe('Compare text on page', function () {
    // config.env === 'prod' && pending('Forse skip');

    it('1723: Preconditions', async function () {
        token = await apiHelper.gerCustomerToken();
    });

    it('should ', async function () {
        templateList = templateData.templateList;
        for (let id = 0; id < templateList.length; id++) {
            templateInfo = await apiHelper.getTemplateInfo(token, templateList[id]);
            funnel = JSON.parse(templateInfo.text).data;
            for (let id = 0; id < funnel.length; id++) {
                funnelLanguage = funnel[id].funnel_language;
                domain_id = funnel[id].domain_id;
                funnel_uri = funnel[id].funnel_uri;
                templateName = funnel[id].funnel_template;
                idFunnel = funnel[id].id;
                const domainsName = await apiHelper.getDomaiId(token, constants.domainSize.size, domain_id);
                domain_name = domainsName.domain;
                getDomain = domainsName.domain.split(".");
                domainConstructor = getDomain[1];
                if (getDomain.length === 3) {
                    funnelUrl = await buildUrlHelper.buildUrlHelper(domain_name, config.domainEnv, funnel_uri);
                } else {
                    funnelUrl = await buildUrlHelper.buildUrlHelperWithDot(domain_name, config.domainEnvWithDot, funnel_uri);
                }
                if (domainConstructor !== 'marketingiant' && domainConstructor !== "paused" && domainConstructor !== "marketinguroo") {

                    /*  Optimization for SWITCH/CASE:
                    const textComparing =  (funnelLanguage) => ({
                        ['en']: templatePage.compareEnText(templateName, funnelLanguage, funnelUrl, id, idFunnel),
                        ['es']: templatePage.compareEsText(templateName, funnelLanguage, funnelUrl, id, idFunnel),
                        ['it']: templatePage.compareItText(templateName, funnelLanguage, funnelUrl, id, idFunnel),
                    })[funnelLanguage] || null;
                    textComparing(funnelLanguage);*/

                    switch (funnelLanguage) {
                        case "es":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findEsText, constants.phraseOnAllLanguage.es);
                            break;

                        case "it":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findItText, constants.phraseOnAllLanguage.it);
                            break;

                        case "de":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findDeText, constants.phraseOnAllLanguage.de);
                            break;

                        case "en":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findEnText, constants.phraseOnAllLanguage.en);
                            break;

                        case "sv":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findSvText, constants.phraseOnAllLanguage.sv);
                            break;

                        case "ru":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findRuText, constants.phraseOnAllLanguage.ru);
                            break;

                        case "ar":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findArText, constants.phraseOnAllLanguage.ar);
                            break;

                        case "pt":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findPtText, constants.phraseOnAllLanguage.pt);
                            break;

                        case "th":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findThText, constants.phraseOnAllLanguage.th);
                            break;

                        case "nl":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findNlText, constants.phraseOnAllLanguage.nl);
                            break;

                        case "pl":
                            await templatePage.request(templateName, funnelLanguage, `${funnelUrl}`, `${id}`, idFunnel,
                                templatePage.findLangText.findPlText, constants.phraseOnAllLanguage.pl);
                            break;
                    }
                } else {
                    console.log("domain blocked");
                }
            }
        }
        afterAll(async function () {
            await browser.manage().deleteAllCookies();
        });
    });
});


