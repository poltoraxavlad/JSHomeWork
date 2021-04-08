const EC = protractor.ExpectedConditions;

const ExpectedConditionsHelper = function () {
    this.waitElementPresent = async function (element) {
        await browser.wait(EC.presenceOf(element), browser.getPageTimeout);
    };

    this.waitElementToBeClickable = async function (element) {
        await browser.wait(EC.elementToBeClickable(element), browser.getPageTimeout);
    };

    this.waitElementVisibilityOf =  function (element) {
         browser.wait(EC.visibilityOf(element), browser.getPageTimeout);
    };

    this.waitElementNotPresent  =  function (element) {
        browser.wait(EC.visibilityOf(element), browser.getPageTimeout);
    };

    this.waitElementInvisible  =  function (element) {
        browser.wait(EC.visibilityOf(element), browser.getPageTimeout);
    };
};

module.exports = new ExpectedConditionsHelper();
