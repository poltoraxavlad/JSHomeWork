const constants = require('../../resources/constants');
const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');

const firstNameField = element(by.xpath('(//input[@name="first_name"])[1]'));
const lastNameField = element(by.xpath('(//input[@name="last_name"])[1]'));
const mobilePhoneField = element(by.xpath('(//input[@name="phone_num"])'));
const mailField = element(by.xpath('(//input[@name="user_email"])[1]'));
const submitButton = element(by.css('.lead-form-submit'));
const popUp = element(by.xpath('//div[@class="nrp__block"]'));
const popUpText = element(by.xpath('//div[@class="nrp__t1"]'));
const popUpButton = element(by.xpath('//div[@class="nrp__btn"]'));


const FunnelPage = function () {
    this.get = async function (){
        browser.get(constants.url.funnelURL);
    };

    this.inputFirstNameField = async function (firstName) {
        expect(await expectedConditionsHelper.waitElementPresent(firstNameField));
        await firstNameField.sendKeys(firstName);
    };

    this.inputLastNameField = async function (lastName) {
        expect(await expectedConditionsHelper.waitElementPresent(lastNameField));
        await lastNameField.sendKeys(lastName);
    };

    this.inputMobilePhoneField = async function (mobilePhone) {
        expect(await expectedConditionsHelper.waitElementToBeClickable(mobilePhoneField));
        await mobilePhoneField.sendKeys(mobilePhone);
    };

    this.inputMailField = async function (randomEmail) {
        expect(await expectedConditionsHelper.waitElementPresent(mailField));
        await mailField.sendKeys(randomEmail);
    };

    this.clickSubmitButton = async function () {
        expect(await expectedConditionsHelper.waitElementToBeClickable(submitButton));
        await submitButton.click();
    };

    this.popIsDisplayed = async function () {
        expect(await expectedConditionsHelper.waitElementPresent(popUp));
        return popUp.isPresent();
    };

    this.getPopUpText = async function () {
        expect(await expectedConditionsHelper.waitElementToBeClickable(popUp));
        return popUpText.getText();
        };

    this.clickPopUpButton = async function() {
        expect(await expectedConditionsHelper.waitElementToBeClickable(popUpButton));
        await popUpButton.click();
    };
};

module.exports = new FunnelPage();

