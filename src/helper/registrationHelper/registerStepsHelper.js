const constants = require('../../resources/constants');
const expectedConditionsHelper = require('../generalHelper/expectedConditionsHelper');

const firstNameFiled = element(by.xpath('(//input[@name="first_name"])[1]'));
const lastNameField = element(by.xpath('(//input[@name="last_name"])[1]'));
const writeMobilePhone = element(by.xpath('(//input[@name="phone_num"])'));
const sendEmail = element(by.xpath('(//input[@name="user_email"])[1]'));
const clickButton = element(by.css('.lead-form-submit'));


const registerDataForOneStepFunnelWithoutPassword = async function (randomEmail, country) {
    await expectedConditionsHelper.waitElementToBeClickable(firstNameFiled);
    await firstNameFiled.sendKeys(constants.userData.firstNameFiled);
    await lastNameField.sendKeys(constants.userData.lastNameField);
    await sendEmail.sendKeys(randomEmail);
    await writeMobilePhone.sendKeys(constants.userData.writeMobilePhone);
    await clickButton.click();
};

module.exports = {
    registerDataForOneStepFunnelWithoutPassword
};
