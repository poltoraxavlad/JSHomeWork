const clearHelper = function () {
    this.clearForValueFields = async function (element, count) {
       await element.sendKeys("");
         for(let index = 0; index < count; ++index){
            await browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform();
        }
    };
};
module.exports = new clearHelper();
