const EC = protractor.ExpectedConditions;

const ExpectedConditionsHelper = function () {
    this.waitElementPresent = async function (element) {
        await browser.wait(EC.presenceOf(element), browser.getPageTimeout);
    };

    this.waitElementToBeClickable = async function (element) {
        await browser.wait(EC.elementToBeClickable(element), browser.getPageTimeout);
    };
};

module.exports = new ExpectedConditionsHelper();
