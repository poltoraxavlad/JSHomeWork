const apiHelper = require('../../helper/dashboardHelper/apiHelper');
const myAccountPage = require('../../pages/myAccountForManualScriptsPage');
const registerStepsHelper = require('../../helper/registrationHelper/registerStepsHelper');
const config = require('../../resources/config');

describe('Funnels testing', function () {
    it('Funnel test', async function () {
        let token = await apiHelper.gerCustomerToken();
        let funnelList = await apiHelper.getFunnelList(token, 400);
        for (let id = 0; id < funnelList.length; id++) {
            if (funnelList[id].funnel_template === 'the-tesler-onestep' && funnelList[id].brand_id === 18) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=9668&subc=w58d8e7amiq3ed8r1fv6uplq`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.registerDataForOneStepFunnelWihtoutPassword();
                await expect(myAccountPage.checkText()).toBeTruthy();
            }
            if (funnelList[id].funnel_template === 'aramco_inv_vn' && funnelList[id].brand_id === 18) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=9668&subc=w58d8e7amiq3ed8r1fv6uplq`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.registerDataForOneStepFunnelWihtoutPassword();
                await expect(myAccountPage.checkText()).toBeTruthy();
             }
            if (funnelList[id].funnel_template === 'trade_aramco_no_logo_ar' && funnelList[id].brand_id === 18) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=9668&subc=w58d8e7amiq3ed8r1fv6uplq`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.registerDataForOneStepFunnelWihtoutPassword();
                await expect(myAccountPage.checkText()).toBeTruthy();
            }
            if (funnelList[id].funnel_template === 'metodo-espanol' && funnelList[id].brand_id === 18) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=6609`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.testDataForTwoStFunnael();
                await expect(myAccountPage.getTradeltdTextMyAccount()).toBeTruthy();
                await browser.driver.manage().deleteAllCookies();
                await browser.executeScript('window.sessionStorage.clear();');
                await browser.executeScript('window.localStorage.clear();');
                await browser.executeScript("window.localStorage.removeItem('redux_localstorage_simple');");
            }
            if (funnelList[id].funnel_template === 'cannabis-green' && funnelList[id].brand_id === config.idTradeFW) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=1048&subc=w3FCJ5B4U2L713RO1A4QG2BI`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.registerDataForOneStepFunnelWihtoutPassword();
                await expect(myAccountPage.getTradefwTextOnFirstStepRegister()).toBeTruthy();
            }
            if (funnelList[id].funnel_template === 'beyond_4f' && funnelList[id].brand_id === config.idTradeFW) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=1048&subc=w3FCJ5B4U2L713RO1A4QG2BI`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.registerDataForOneStepFunnelWithPassword();
                await expect(myAccountPage.getTradefwTextOnSecondStepRegister()).toBeTruthy();
                await browser.driver.manage().deleteAllCookies();
                await browser.executeScript('window.sessionStorage.clear();');
                await browser.executeScript('window.localStorage.clear();');
                await browser.executeScript("window.localStorage.removeItem('redux_localstorage_simple');");
            }
            if (funnelList[id].funnel_template === 'capitalgenius_recta_newvo' && funnelList[id].brand_id === 9) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=13194&subc=w3FCJ5B4U2L713RO1A4QG2BI`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.registerDataForOneStepFunnelWihtoutPassword();
                await expect(myAccountPage.getTextOnRegisterPageRCPRO()).toBeTruthy();
            }
            if (funnelList[id].funnel_template === 'royal-saudi-wealth-club-2steps' && funnelList[id].brand_id === 9) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=13194&subc=w3FCJ5B4U2L713RO1A4QG2BI`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.testDataForTwoStFunnael();
                await expect(myAccountPage.getTextOnDepositPageRCPRO()).toBeTruthy();
            }
            if (funnelList[id].funnel_template === 'the-tesler-cms' && funnelList[id].brand_id === config.idInvestFW) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=6609&subc=w58d8e7amiq3ed8r1fv6uplq`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.registerDataForOneStepFunnelWithPassword();
                await expect(myAccountPage.getTradeltdTextMyAccount()).toBeTruthy();
            }
            if (funnelList[id].funnel_template === 'bitcoin-code' && funnelList[id].brand_id === config.idInvestFW) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=6609&subc=w58d8e7amiq3ed8r1fv6uplq`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.registerDataForOneStepFunnelWihtoutPassword();
                await expect(myAccountPage.getTradeltdTextMyAccount()).toBeTruthy();
            }
            if (funnelList[id].funnel_template === 'bitcoin-code' && funnelList[id].brand_id === config.CAPITALIX.idCapitalix) {
                let domainsName = await apiHelper.getDomaiId(token, 50, funnelList[id].domain_id);
                let domainsFullName = await domainsName.domain.split('.');
                domainsFullName[0] = `${domainsFullName[0]}${config.domainEnv}`;
                domainsName.domain = domainsFullName.join('.');
                let funnelUrl = `https://${domainsFullName.join('.')}${funnelList[id].funnel_uri}?link=6609&subc=w58d8e7amiq3ed8r1fv6uplq`;
                await browser.get(funnelUrl);
                console.log('Funnel URL -', funnelUrl);
                await browser.executeScript('window.localStorage.clear();');
                await browser.refresh();
                await registerStepsHelper.testDataForTwoStFunnael();
                await expect(myAccountPage.getTextCapitalix()).toBeTruthy();
            }
        }
    });
});

