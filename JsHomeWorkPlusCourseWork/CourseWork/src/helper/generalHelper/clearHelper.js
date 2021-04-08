const clearHelper = function () {
    this.clearForValueFields = function (element, count) {
        element.sendKeys("");
        for(let index = 0; index < count; ++index){
            browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
        }
    };
};
module.exports = new clearHelper();
