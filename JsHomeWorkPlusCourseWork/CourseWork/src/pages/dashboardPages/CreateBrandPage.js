const config = require('../../resources/config');
const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const constants = require('../../resources/constants');

const addButton = element(by.xpath('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]'));
const inputTitle = element(by.xpath('(//input[@class="MuiInputBase-input MuiInput-input"])[1]'));
const inputSlug = element(by.xpath('(//input[@class="MuiInputBase-input MuiInput-input"])[2]'));
const inputBaseURL = element(by.xpath('(//input[@class="MuiInputBase-input MuiInput-input"])[3]'));
const inputCRM = element(by.xpath('//input[@id="select-crm"]'));
const crm = element(by.xpath('//p[@data-option="170"]'));
const saveButton = element(by.xpath('(//button[@class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"])[1]'));
const filterButton = element(by.xpath('//button[@class="MuiButtonBase-root MuiIconButton-root ml-auto"]'));
const addPopup = element(by.xpath(`//span[text()= "${constants.textPopup.ADDED}"]`));
const searchTitleField = element(by.xpath('(//input[@class="MuiInputBase-input MuiInput-input"])[2]'));
const editBtn = element(by.xpath('(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary"])[2]'));
const inputBrand = element(by.xpath('(//div[contains(@class,"MuiInputBase-root MuiInput-root")]//input)[2]'));
const brand = element(by.xpath('//li[text()="Capitalix"]'));
const savePopup = element(by.xpath(`//span[text()= "${constants.textPopup.SAVE}"]`));
const backButton = element(by.xpath('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-contained"]'));
const resetButton = element(by.xpath('(//button[contains(@class,"MuiButtonBase-root MuiIconButton-root")])[2]'));
const baseURLField = element(by.xpath('(//input[@class="MuiInputBase-input MuiInput-input"])[3]'));
const deleteButton = element(by.xpath('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary"]'));
const okButton = element(by.xpath('//button[@class = "MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"]'));

const CreateBrandPage = function () {
    this.get = function () {
        browser.get(config.baseURL + "/funnel-system/brands/");
    };

    this.clickAddButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(addButton);
        addButton.click();
    };

    this.writeTitle = function (rundomTitle) {
        expectedConditionsHelper.waitElementToBeClickable(inputTitle);
        inputTitle.sendKeys(rundomTitle);
    };

    this.writeSlug = function (randomSlug) {
        expectedConditionsHelper.waitElementToBeClickable(inputSlug);
        inputSlug.sendKeys(randomSlug)
    };

    this.writeBaseURL = function () {
        expectedConditionsHelper.waitElementToBeClickable(inputBaseURL);
        inputBaseURL.sendKeys(constants.brandValues.baseURL);
    };

    this.clickToCRMInput = function () {
        expectedConditionsHelper.waitElementToBeClickable(inputCRM);
        inputCRM.click();
    };

    this.enterCRM = function () {
        expectedConditionsHelper.waitElementToBeClickable(crm);
        crm.click();
    };

    this.clickSaveButton = function () {
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

    this.sendBaseURL = function () {
        expectedConditionsHelper.waitElementVisibilityOf(baseURLField);
        expectedConditionsHelper.waitElementToBeClickable(baseURLField);
        baseURLField.sendKeys(constants.brandValues.baseURL);
    };

    this.searchBrandByTitle = function (randomTitle) {
        expectedConditionsHelper.waitElementToBeClickable(searchTitleField);
        searchTitleField.sendKeys(randomTitle);
    };

    this.сheckValueIsPresentAfterFirstSearch = function (title) {
        let value = element(by.xpath(`//tbody[@class="MuiTableBody-root"]//td[contains(., "${title}")]`));
        expectedConditionsHelper.waitElementPresent(value);
        return value.isPresent();
    };

    this.clickResetFilter = function () {
        expectedConditionsHelper.waitElementVisibilityOf(resetButton);
        resetButton.click();
    };

    this.clickEditButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(editBtn);
        editBtn.click()
    };

    this.clickBrandField = function () {
        expectedConditionsHelper.waitElementToBeClickable(inputBrand);
        inputBrand.click();
    };

    this.chooseBrand = function () {
        expectedConditionsHelper.waitElementToBeClickable(brand);
        brand.click();
    };

    this.checkSavePopupPresent = function () {
        expectedConditionsHelper.waitElementVisibilityOf(savePopup);
        return savePopup.isPresent();
    };

    this.clickBaсkButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(backButton);
        backButton.click();
    };

    this.clickDeleteButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(deleteButton);
        deleteButton.click();
    };

    this.checkBrandNameIsPresent = function (title) {
        let value = element(by.xpath(`//div[@class="MuiDialogTitle-root"]//h2[contains(., "${title}")]`));
        expectedConditionsHelper.waitElementVisibilityOf(value);
        return value.isPresent();
    };

    this.clickOkButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(okButton);
        okButton.click();
    };

    this.checkDeleteTitle = function () {
        let value = element(by.xpath(`//span[text()="${constants.textPopup.DELETE}"]`));
        expectedConditionsHelper.waitElementVisibilityOf(value);
        return value.isPresent();
    };
};

module.exports = new CreateBrandPage();
