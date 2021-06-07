const waitForSuccessDisplayedPageHelper = function () {
    this.waitForSuccessDisplayedPage = async function (funnelUrl, marketingParameters, loaderElement, element, booleanValue) {
        for (let i = 0; i <= 10; i++) {
            if (i % 2 !== 0) {
                continue;
            }
            browser.get(`${funnelUrl}/${marketingParameters}`);
            if (!await loaderElement.isPresent()) {
                console.log(`Wait for element display for ${i} second`);
                browser.sleep(2000)
                if (i === 10) {
                    console.log("The page is not displayed")
                    expect(loaderElement.isPresent()).toBe(true);
                }
            } else {
                console.log("Funnel displayed successfully")
                expect(loaderElement.isPresent()).toBe(true);
                expect(element.isPresent()).toBe(booleanValue);
                break;
            }
        }
    }
};

module.exports = new waitForSuccessDisplayedPageHelper;
