const constants = require('../../resources/constants');
const expectedConditionsHelper = require('../generalHelper/expectedConditionsHelper');

const writePasswordOnTradeLtd = element(by.xpath('//input[@name="password-regform1"]'));
const retypePasswordOnTradeLtd = element(by.xpath('//input[@name="passwordConfirm-regform1"]'));

const setPasswordOnOpenAccPageTradeLtd = function (){
    expectedConditionsHelper.waitElementToBeClickable(writePasswordOnTradeLtd);
    writePasswordOnTradeLtd.sendKeys(constants.userData.writePassword);
    expectedConditionsHelper.waitElementToBeClickable(retypePasswordOnTradeLtd);
    retypePasswordOnTradeLtd.sendKeys(constants.userData.writePassword);
};

module.exports = {
    setPasswordOnOpenAccPageTradeLtd
};
