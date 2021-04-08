const apiHelper = require('../../helper/dashboardHelper/apiHelper');
const config = require('../../resources/config');

describe('Funnels testing', function () {
    it('Funnel test', async function () {
        let token = await apiHelper.gerCustomerToken();
        let funnelList = await apiHelper.getFunnelList(token, 600);
        for (let id = 0; id < funnelList.length; id++) {
            let domainName = await apiHelper.getDomaiId(token, 70, funnelList[id].domain_id);
                let domainFullName = domainName.domain.split('.');
                domainFullName[0] = `${domainFullName[0]}${config.domainEnv}`;
                domainName.domain = domainFullName.join('.');
                let funnelUrl = `https://${domainFullName.join('.')}${funnelList[id].funnel_uri}`;
                await browser.get(funnelUrl);
                const div = element(by.id('loader'));
                if (!await div.isPresent()) {
                    console.error(id, "Funnel with id =", funnelList[id].id, 'failed.');
                } else {
                    console.log(id,"Funnel with id =", funnelList[id].id, 'successful.');
                }
                await expect(div.isPresent()).toBe(true);
        }
    });
});
