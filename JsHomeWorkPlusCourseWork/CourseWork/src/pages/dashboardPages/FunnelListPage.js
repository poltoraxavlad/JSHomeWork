const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const constants = require('../../resources/constants');

const nameField = element(by.xpath('(//input[@class="MuiInputBase-input MuiInput-input"])[1]'));
const resetButton = element(by.xpath(`//button[@data-autotests = "nfs_funnels_reset_button"]`));
const uriField = element(by.xpath('(//input[@class="MuiInputBase-input MuiInput-input"])[2]'));
const deleteButton = element(by.xpath('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary"]'));
const okButton = element(by.xpath('//button[@data-autotests = "nfs_funnels_modal_delete"]'));

const FunnelListPage = function () {
    this.writeNameFunnel = function (uri) {
        expectedConditionsHelper.waitElementVisibilityOf(nameField);
        nameField.sendKeys(uri);
    };
    this.CheckValueIsPresentAfterFirstSearch = function (url) {
        let value = element(by.xpath(`//tbody[@class="MuiTableBody-root"]//td[contains(., "${url}")][1]`));
        expectedConditionsHelper.waitElementToBeClickable(value);
        return value.isPresent();
    };

    this.CheckValueIsPresentAfterSecondSearch = function (url) {
        let value = element(by.xpath(`//tbody[@class="MuiTableBody-root"]//td[contains(., "${url}")][1]`));
        expectedConditionsHelper.waitElementToBeClickable(value);
        return value.isPresent();
    };

    this.clickResetFilter = function () {
        expectedConditionsHelper.waitElementToBeClickable(resetButton);
        resetButton.click();
    };

    this.writeUriFunnel = function (uri) {
        expectedConditionsHelper.waitElementVisibilityOf(uriField);
        expectedConditionsHelper.waitElementToBeClickable(uriField);
        uriField.sendKeys(uri);
    };

    this.clickDeleteButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(deleteButton);
        deleteButton.click();
    };

    this.checkFunnelNameIsPresent = function (url) {
        let value = element(by.xpath(`//div[@class="MuiDialogTitle-root"]//h2[contains(., "${url}")]`));
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

module.exports = new FunnelListPage();
