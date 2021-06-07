const constants = require('../../resources/constants');
const expectedConditionsHelper = require('../generalHelper/expectedConditionsHelper');

const writePasswordOnTradeFW = element(by.xpath('//input[@name="password"]'));

const refillDataOnFirstStepTradeFW = function (){
    expectedConditionsHelper.waitElementToBeClickable(writePasswordOnTradeFW);
    writePasswordOnTradeFW.sendKeys(constants.userData.writePassword);
};

module.exports = {
    refillDataOnFirstStepTradeFW
};
