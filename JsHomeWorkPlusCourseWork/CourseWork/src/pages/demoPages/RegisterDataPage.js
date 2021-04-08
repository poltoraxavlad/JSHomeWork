const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const constants = require('../../resources/constants');

const firstNameFieldForm1 = element(by.xpath("(//input[@name ='first_name'])[1]"));
const lastNameFieldForm1 = element(by.xpath("(//input[@name='last_name'])[1]"));
const emailFieldForm1 = element(by.xpath("(//input[@name ='user_email'])[1]"));
const prefixFieldForm1 = element(by.xpath("(//div[@class ='lead-form__data-item lead-form__data-item_prefix'])[1]"));
const phoneNumberFieldForm1 = element(by.xpath("(//input[@name='phone_num'])[1]"));
const submitButtonForm1 = element(by.xpath("(//button[@class='lead-form__submit lead-form-submit'])[1]"));

const firstNameFieldForm2 = element(by.xpath("(//input[@name ='first_name'])[2]"));
const lastNameFieldForm2 = element(by.xpath("(//input[@name='last_name'])[2]"));
const emailFieldForm2 = element(by.xpath("(//input[@name ='user_email'])[2]"));
const prefixFieldForm2 = element(by.xpath("(//div[@class ='lead-form__data-item lead-form__data-item_prefix'])[2]"));
const phoneNumberFieldForm2 = element(by.xpath("(//input[@name='phone_num'])[2]"));
const submitButtonForm2 = element(by.xpath("(//button[@class='lead-form__submit lead-form-submit'])[2]"));

const fullName = element(by.xpath("//input[@name ='full_name']"));

const notRedirectForm =  function (randomEmail, randomPhone, countryID) {
     const clickCountryForm1 = element(by.xpath(`(//div[@data-id ='${countryID}'])[1]`));

     expectedConditionsHelper.waitElementToBeClickable(firstNameFieldForm1);
     firstNameFieldForm1.sendKeys(constants.userData.firstNameFiled);
     lastNameFieldForm1.sendKeys(constants.userData.lastNameField);
     emailFieldForm1.sendKeys(randomEmail);
     prefixFieldForm1.click();
     clickCountryForm1.click();
     phoneNumberFieldForm1.sendKeys(randomPhone);
     submitButtonForm1.click();
};

const redirectForm = function (randomEmail, randomPhone, countryID) {
     const clickCountryForm2 = element(by.xpath(`(//div[@data-id ='${countryID}'])[2]`));

     expectedConditionsHelper.waitElementToBeClickable(firstNameFieldForm1);
     firstNameFieldForm2.sendKeys(constants.userData.firstNameFiled);
     lastNameFieldForm2.sendKeys(constants.userData.lastNameField);
     emailFieldForm2.sendKeys(randomEmail);
     prefixFieldForm2.click();
     clickCountryForm2.click();
     phoneNumberFieldForm2.sendKeys(randomPhone);
     submitButtonForm2.click();
};

const fullNameData = function(randomEmail, randomPhone, countryID){
     const clickCountryForm2 = element(by.xpath(`(//div[@data-id ='${countryID}'])[2]`));

     expectedConditionsHelper.waitElementToBeClickable(fullName);
     fullName.sendKeys("test test");
     emailFieldForm2.sendKeys(randomEmail);
     prefixFieldForm2.click();
     clickCountryForm2.click();
     phoneNumberFieldForm2.sendKeys(randomPhone);
     submitButtonForm2.click();
};

module.exports = {
    notRedirectForm,
    redirectForm,
     fullNameData
};








