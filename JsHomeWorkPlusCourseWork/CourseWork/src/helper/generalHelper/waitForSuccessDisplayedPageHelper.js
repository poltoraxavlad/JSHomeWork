const waitForSuccessDisplayedPageHelper = function () {
    this.waitForSuccessDisplayedPage = async function (funnelUrl, marketingParameters, loaderElement) {
        for (let i = 0; i <= 16; i++) {
            if (i % 2 !== 0) {
                continue;
            }
            browser.get(`${funnelUrl}/${marketingParameters}`);
            if (!await loaderElement.isPresent()) {
                console.log(`Wait for element display for ${i} second`);
                browser.sleep(2000)
            } else break;
        }
    }
};

module.exports = new waitForSuccessDisplayedPageHelper;
