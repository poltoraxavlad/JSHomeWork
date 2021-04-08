const config = require('../../resources/config');
const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const constants = require('../../resources/constants');
const clearHelper = require('../../helper/generalHelper/clearHelper');

const buttonAdd = element(by.xpath('//button[@data-autotests="nfs_domain_add_new_button"]'));
const domainField = element(by.xpath(`//input[@name = "${constants.domainData.domainInputName}"]`));
const descriptionField = element(by.xpath(`//input[@name = "${constants.domainData.descriptionInputName}"]`));
const saveButton = element(by.xpath('(//button[@class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"])[1]'));
const addPopup = element(by.xpath(`//span[text()= "${constants.textPopup.ADDED}"]`));
const filterButton = element(by.css('.MuiButtonBase-root.MuiIconButton-root.ml-auto'));
const resetButton = element(by.xpath(`(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary"])[1]`));
const editBtn = element(by.xpath(`//button[@title= "${constants.domainData.editButtonTitle}"]`));
const domainUpdatedPopup = element(by.xpath(`//span[text()= "${constants.textPopup.DOMAIN_UPDATED}"]`));
const deleteButton = element(by.xpath('(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary"])[1]'));
const okButton = element(by.xpath('//button[@data-autotests= "nfs_sites_modal_delete"]'));
const deletePopup = element(by.xpath(`//span[text()= "${constants.textPopup.DELETE}"]`));

const DomainPage = function () {
    this.get = function () {
        browser.get(config.baseURL + "/funnel-system/domains");
    };

    this.clickAddButton = function () {
        expectedConditionsHelper.waitElementVisibilityOf(buttonAdd);
        buttonAdd.click();
    };

    this.writeDomain = function (domainName) {
        expectedConditionsHelper.waitElementVisibilityOf(domainField);
        domainField.sendKeys(domainName);
    };

    this.writeDescription = function (description) {
        expectedConditionsHelper.waitElementVisibilityOf(descriptionField);
        expectedConditionsHelper.waitElementToBeClickable(descriptionField);
        descriptionField.sendKeys(description);
    };

    this.clickSaveButton = function () {
        expectedConditionsHelper.waitElementVisibilityOf(saveButton);
        expectedConditionsHelper.waitElementToBeClickable(saveButton);
        saveButton.click();
    };

    this.checkAddPopupPresent = function () {
        expectedConditionsHelper.waitElementVisibilityOf(addPopup);
        return addPopup.isPresent();
    };

    this.clickFilterButton = function () {
        expectedConditionsHelper.waitElementVisibilityOf(filterButton);
        filterButton.click();
    };

    this.domainSearch = function (domainName) {
        expectedConditionsHelper.waitElementVisibilityOf(domainField);
        domainField.sendKeys(domainName);
    };

    this.checkValueInFilterIsPresent = function (domainName) {
        let value = element(by.xpath(`//tbody[@class="MuiTableBody-root"]//a[contains(., "${domainName}")]`));
        expectedConditionsHelper.waitElementVisibilityOf(value);
        return value.isPresent();
    };

    this.clickResetFilter = function () {
        expectedConditionsHelper.waitElementVisibilityOf(resetButton);
        resetButton.click();
    };

    this.searchByDescription = function (description) {
        expectedConditionsHelper.waitElementVisibilityOf(descriptionField);
        descriptionField.sendKeys(description);
    };

    this.clickEdinBtn = function () {
        expectedConditionsHelper.waitElementToBeClickable(editBtn);
        editBtn.click();
    };

    this.checkTextDomainField = function (domainName) {
        let textNameField = element(by.xpath(`(//input[@value="${domainName}"])[2]`));
        expectedConditionsHelper.waitElementToBeClickable(textNameField);
        return textNameField.isPresent();
    };

    this.clearDescriptionField = function () {
        expectedConditionsHelper.waitElementVisibilityOf(descriptionField);
        expectedConditionsHelper.waitElementToBeClickable(descriptionField);
        clearHelper.clearForValueFields(descriptionField, 30);
    };

    this.changeDescriptionField = function (newDescription) {
        expectedConditionsHelper.waitElementVisibilityOf(descriptionField);
        expectedConditionsHelper.waitElementToBeClickable(descriptionField);
        descriptionField.sendKeys(`${newDescription}`);
    };

    this.checkDomainUpdatedPopupPresent = function () {
        expectedConditionsHelper.waitElementToBeClickable(domainUpdatedPopup);
        return domainUpdatedPopup.isPresent();
    };

    this.checkNewDescriptionValueIsPresent = function (newDescription) {
        let descriptionValue = element(by.xpath(`//td[text()="${newDescription}"]`));
        expectedConditionsHelper.waitElementToBeClickable(descriptionValue);
        return descriptionValue.isPresent();
    };

    this.clickDeleteButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(deleteButton);
        deleteButton.click();
    };

    this.checkValueDescription = function (url) {
        let value = element(by.xpath(`//div[@class="MuiDialogTitle-root"]//h2[contains(., "${url}")]`));
        expectedConditionsHelper.waitElementVisibilityOf(value);
        return value.isPresent();
    };

    this.clickOkButton = function () {
        okButton.click();
    };

    this.checkDeleteTitle = function () {
        expectedConditionsHelper.waitElementVisibilityOf(deletePopup);
        return deletePopup.isPresent();
    };
};

module.exports = new DomainPage();
