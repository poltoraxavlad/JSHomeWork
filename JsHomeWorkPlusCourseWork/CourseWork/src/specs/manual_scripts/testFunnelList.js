const funnels_data = require('../../test_data/funnels_data');
const button = element(by.xpath("(//input[@type='submit'])[1]"));

describe('Funnels testing', function () {
    it('Funnel test', async function () {
        for (let id = 0; id < 1500; id++) {
            if (funnels_data.funnelsList[`${id}`] !== undefined) {
                browser.get(funnels_data.funnelsList[`${id}`]);
                if (!await button.isPresent()) {
                    console.error("Funnel with id =", id, 'failed.');
                } else {
                    console.log("Funnel with id =", id, 'successful.');
                }
                await expect(button.isPresent()).toBe(true);
            }
        }
    });
});
