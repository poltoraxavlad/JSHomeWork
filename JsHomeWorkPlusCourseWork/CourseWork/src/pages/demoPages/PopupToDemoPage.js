const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const closePopup = element(by.xpath("//div[@class='popup__body-close']"));

const popupToDemoPage = function () {
    this.waitPopup = function () {
        const popup = element(by.xpath("//div[@class='popup__body-inner']"));   ////button[text()="BACK TO PAGE"]
        expectedConditionsHelper.waitElementToBeClickable(popup);
        return popup.isPresent();
    };

    this.closePopup = function () {
        expectedConditionsHelper.waitElementToBeClickable(closePopup);
        closePopup.click()
    };
};

module.exports = new popupToDemoPage();
