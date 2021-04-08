const config = require('../../resources/config');
const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const clearHelper = require('../../helper/generalHelper/clearHelper');
const constants = require('../../resources/constants');

const openDomainList = element(by.xpath('(//input[@aria-autocomplete="list"])[2]'));
const chooseDomainFromList = element(by.xpath('//li[@data-option-index="32"]'));
const openBrandList = element(by.css('#mui-component-select-brand_id'));
const chooseBrandFromList = element(by.xpath(`(//li[@class="MuiAutocomplete-option"]//span[contains(., "TradeFW")])[1]`));
const writeFunnelName = element(by.xpath('//input[@data-autotests="nfs_funnel_title"]'));
const templateField = element(by.xpath('//input[@data-autotests="nfs_funnel_template"]'));
const chooseTemplateFromList = element(by.xpath('//tr[@id="TestR&D-the-tesler-cms"]'));
const selectButton = element(by.xpath('//button[@data-autotests="nfs_funnel_template-select"]'));
const openListLanguage = element(by.xpath('//div[@id="mui-component-select-funnel_language"]'));
const chooseLanguageFromList = element(by.xpath('//li[@data-value= "en"]'));
const funnelURI = element(by.xpath('//input[@data-autotests="nfs_funnel_uri"]'));
const autologinToFiled = element(by.id('mui-component-select-funnel_redirect'));
const autologinUrl = element(by.xpath('//li[@data-value = "account"]'));
const choseVideoField = element(by.xpath('//div[@data-autotests="nfs_funnel_choose_video"]'));
const enterVideo = element(by.xpath('(//tr[@class="MuiTableRow-root MuiTableRow-hover"])[1]'));
const saveButton = element(by.xpath('//button[@data-autotests="nfs_funnel_save"]'));

const editBtn = element(by.xpath('(//button[@title="Edit"])[1]'));
const savePopup = element(by.xpath(`//span[text()= "${constants.textPopup.SAVE}"]`));


const CreateFunnelPage = function () {
    this.get = function () {
        browser.get(config.baseURL + "/funnel-system/funnels/");
    };

    this.domainList = function () {
        expectedConditionsHelper.waitElementVisibilityOf(openDomainList);
        expectedConditionsHelper.waitElementToBeClickable(openDomainList);
        openDomainList.click()
    };

    this.chooseDomain = function () {
        expectedConditionsHelper.waitElementVisibilityOf(chooseDomainFromList);
        expectedConditionsHelper.waitElementToBeClickable(chooseDomainFromList);
        chooseDomainFromList.click()
    };

    this.brandList = function () {
        expectedConditionsHelper.waitElementVisibilityOf(openBrandList);
        expectedConditionsHelper.waitElementToBeClickable(openBrandList);
        openBrandList.click();
    };

    this.chooseBrand = function () {
        expectedConditionsHelper.waitElementVisibilityOf(chooseBrandFromList);
        expectedConditionsHelper.waitElementToBeClickable(chooseBrandFromList);
        chooseBrandFromList.click();
    };

    this.funnelName = function (randomName) {
        expectedConditionsHelper.waitElementToBeClickable(writeFunnelName);
        writeFunnelName.sendKeys(randomName);
    };

    this.clickTemplateField = function () {
        expectedConditionsHelper.waitElementVisibilityOf(templateField);
        expectedConditionsHelper.waitElementToBeClickable(templateField);
        templateField.click();
    };

    this.chooseTemplate = function () {
        expectedConditionsHelper.waitElementVisibilityOf(chooseTemplateFromList);
        expectedConditionsHelper.waitElementToBeClickable(chooseTemplateFromList);
        chooseTemplateFromList.click();
    };

    this.clickSelectButton = function () {
        expectedConditionsHelper.waitElementVisibilityOf(selectButton);
        expectedConditionsHelper.waitElementToBeClickable(selectButton);
        selectButton.click();
    };

    this.clickLanguageField = function () {
        expectedConditionsHelper.waitElementVisibilityOf(openListLanguage);
        expectedConditionsHelper.waitElementToBeClickable(openListLanguage);
        openListLanguage.click();
    };

    this.chooseLanguage = function () {
        expectedConditionsHelper.waitElementVisibilityOf(chooseLanguageFromList);
        expectedConditionsHelper.waitElementToBeClickable(chooseLanguageFromList);
        chooseLanguageFromList.click();
    };

    this.writeFunnelURI = function (url) {
        expectedConditionsHelper.waitElementToBeClickable(funnelURI);
        funnelURI.sendKeys(url);
    };

    this.clcikAutologinToField = function () {
        expectedConditionsHelper.waitElementToBeClickable(autologinToFiled);
        autologinToFiled.click()
    };
    this.chooseAutologinURL = function () {
        expectedConditionsHelper.waitElementToBeClickable(autologinUrl);
        autologinUrl.click()
    };

    this.clickChoseVideoField = function () {
        expectedConditionsHelper.waitElementToBeClickable(choseVideoField);
        choseVideoField.click()
    };

    this.enterVideo = function () {
        expectedConditionsHelper.waitElementToBeClickable(enterVideo);
        enterVideo.click();
    };

    this.clickSaveButton = function () {
        browser.actions().mouseDown(saveButton).perform();
        expectedConditionsHelper.waitElementToBeClickable(saveButton);
        saveButton.click();
    };

    this.CheckValue = function (url) {
        let value = element(by.xpath(`//tbody[@class="MuiTableBody-root"]//td[contains(., "/${url}")]`));
        expectedConditionsHelper.waitElementVisibilityOf(value);
        return value.isPresent();
    };

    this.clickEditButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(editBtn);
        editBtn.click()
    };

    this.checkTextNameField = function (url) {
        let textNameField = element(by.xpath(`//input[@value="${url}"]`));
        expectedConditionsHelper.waitElementToBeClickable(textNameField);
        return textNameField.isPresent();
    };

    this.clearNameField = function () {
        expectedConditionsHelper.waitElementToBeClickable(writeFunnelName);
        clearHelper.clearForValueFields(writeFunnelName, 30);
    };

    this.changeNameField = function (url) {
        expectedConditionsHelper.waitElementToBeClickable(writeFunnelName);
        writeFunnelName.sendKeys(`${url}`);
    };

    this.checkSavePopupPresent = function () {
        expectedConditionsHelper.waitElementToBeClickable(savePopup);
        return savePopup.isPresent();
    };
};

module.exports = new CreateFunnelPage();
