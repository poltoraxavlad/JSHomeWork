const constants = require('../../resources/constants');
const expectedConditionsHelper = require('../generalHelper/expectedConditionsHelper');

const firstNameFiled = element(by.xpath('(//input[@name="first_name"])[1]'));
const firstNameFiledOnPopup = element(by.xpath('(//input[@name="first_name"])[2]'));
const lastNameField = element(by.xpath('(//input[@name="last_name"])[1]'));
const lastNameFieldOnPopup = element(by.xpath('(//input[@name="last_name"])[2]'));
const fullName = element(by.id("full_name"));
const countryList = element(by.xpath('(//select[@id="country"])[1]'));
const prefixList = element(by.xpath('(//div[@class="iti__flag-container"])[1]'));
const prefixListOnPopup = element(by.xpath('(//div[@class="iti__flag-container"])[2]'));
const selectPrefix = element(by.xpath('//li[@data-dial-code="966"]'));
const selectPrefixOnPopup = element(by.xpath('(//li[@data-dial-code="966"])[2]'));
const writeMobilePhone = element(by.xpath('(//input[@name="phone_num"])[1]'));
const writeMobilePhoneOnPopup = element(by.xpath('(//input[@name="phone_num"])[2]'));
const sendEmail = element(by.xpath('(//input[@name="user_email"])[1]'));
const sendEmailOnPopup = element(by.xpath('(//input[@name="user_email"])[2]'));
const selectCountryId = element(by.xpath(`(//option[text()="${constants.userData.country}"])[1]`));
const writePassword = element(by.xpath('(//input[@name="pw"])[1]'));
const clickButton = element(by.xpath('(//button[@id="lead-form-submit"])[1]'));
const clickButtonOnPopup = element(by.xpath('(//button[@id="lead-form-submit"])[2]'));
const writePassword1TwoStepFunnel = element(by.id('pw'));
const writeConfirmPasswordTwoStepFunnel = element(by.id('pw2'));
const clickButtonSubmit2TwoStepFunnel = element(by.xpath('//input[@id="lead-form-submit"]'));
const clickOnTheHeader = element (by.xpath('//div[@class="col-12 offset-xl-0 blue-block"]') );

const registerDataForOneStepFunnelWithoutPassword = async function (randomEmail, country) {
    const selectCountryId = element(by.xpath(`(//option[text()="${country}"])[1]`));

    await expectedConditionsHelper.waitElementToBeClickable(firstNameFiled);
    await firstNameFiled.sendKeys(constants.userData.firstNameFiled);
    await lastNameField.sendKeys(constants.userData.lastNameField);
    await sendEmail.sendKeys(randomEmail);
    await countryList.click();
    await selectCountryId.click();
    await writeMobilePhone.sendKeys(constants.userData.writeMobilePhone);
    await clickButton.click();
};
const registerDataForOneStepFunnelWithoutSelectCountry = async function (randomEmail) {
    await expectedConditionsHelper.waitElementToBeClickable(firstNameFiled);
    await firstNameFiled.sendKeys(constants.userData.firstNameFiled);
    await lastNameField.sendKeys(constants.userData.lastNameField);
    await sendEmail.sendKeys(randomEmail);
    await prefixList.click();
    await selectPrefix.click();
    await writeMobilePhone.sendKeys(constants.userData.writeMobilePhone);
    await clickButton.click();
};

const registerDataForOneStepFunnelWithRegisterPopup = async function (randomEmail) {
    await clickOnTheHeader.click();
    await expectedConditionsHelper.waitElementToBeClickable(firstNameFiledOnPopup);
    await firstNameFiledOnPopup.sendKeys(constants.userData.firstNameFiled);
    await lastNameFieldOnPopup.sendKeys(constants.userData.lastNameField);
    await sendEmailOnPopup.sendKeys(randomEmail);
    await prefixListOnPopup.click();
    await selectPrefixOnPopup.click();
    await writeMobilePhoneOnPopup.sendKeys(constants.userData.writeMobilePhone);
    await clickButtonOnPopup.click();
};

const testDataForTwoStFunnael = async function () {
    await expectedConditionsHelper.waitElementToBeClickable(firstNameFiled);
    await firstNameFiled.sendKeys('Test');
    await lastNameField.sendKeys('Test');
    await countryList.click();
    await selectCountryId.click();
    await writeMobilePhone.sendKeys('15903904821');
    await sendEmail.sendKeys(userData.getRandomEmail());
    await clickButton.click();
    await expectedConditionsHelper.waitElementToBeClickable(writePassword1TwoStepFunnel);
    await writePassword1TwoStepFunnel.sendKeys('Pikachu1995');
    await writeConfirmPasswordTwoStepFunnel.sendKeys('Pikachu1995');
    await clickButtonSubmit2TwoStepFunnel.click();
};
const registerDataForOneStepFunnelWithPassword = async function (randomEmail) {
    await expectedConditionsHelper.waitElementToBeClickable(firstNameFiled);
    await firstNameFiled.sendKeys(constants.userData.firstNameFiled);
    await lastNameField.sendKeys(constants.userData.lastNameField);
    await countryList.click();
    await selectCountryId.click();
    await writeMobilePhone.sendKeys(constants.userData.writeMobilePhone);
    await sendEmail.sendKeys(randomEmail);
    await writePassword.sendKeys(constants.userData.writePassword);
    await clickButton.click();
};

const leadRegisterDataForOneStepFunnelWithFullName = async function(randomEmail){
    await fullName.sendKeys(constants.userData.fullName);
    await sendEmail.sendKeys(randomEmail);
    await prefixList.click();
    await selectPrefix.click();
    await writeMobilePhone.sendKeys(constants.userData.writeMobilePhone);
    await clickButton.click();
};

module.exports = {
    registerDataForOneStepFunnelWithoutPassword,
    registerDataForOneStepFunnelWithoutSelectCountry,
    registerDataForOneStepFunnelWithRegisterPopup,
    testDataForTwoStFunnael,
    registerDataForOneStepFunnelWithPassword,
    leadRegisterDataForOneStepFunnelWithFullName
};
