const config = require('../../resources/config');
const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const constants = require('../../resources/constants');
const clearHelper = require('../../helper/generalHelper/clearHelper');

const buttonAdd = element(by.xpath('//button[@data-autotests="nfs_videos_toolbar_add-new-button"]'));
const videoNameField = element(by.xpath(`//input[@name = "${constants.videoData.videoInputName}"]`));
const saveButton = element(by.xpath('(//button[@data-autotests="nfs_video_save_button"])[1]'));
const addPopup = element(by.xpath(`//span[text()= "${constants.textPopup.ADDED}"]`));
const filterButton = element(by.css('.MuiButtonBase-root.MuiIconButton-root.ml-auto'));
const editBtn = element(by.xpath(`(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary"])[2]`));
const savePopup = element(by.xpath(`//span[text()= "${constants.textPopup.SAVE}"]`));
const backButton = element(by.xpath('//button[@data-autotests="nfs_video_back_button"]'));
const deleteButton = element(by.xpath('(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary"])[1]'));
const okButton = element(by.xpath('//button[@data-autotests= "nfs_videos_modal_delete"]'));
const deletePopup = element(by.xpath(`//span[text()= "${constants.textPopup.DELETE}"]`));

const VideoPage = function () {
    this.get = function () {
        browser.get(config.baseURL + "/funnel-system/videos");
    };

    this.clickAddButton = function () {
        expectedConditionsHelper.waitElementVisibilityOf(buttonAdd);
        buttonAdd.click();
    };

    this.writeVideo = function (videoName) {
        expectedConditionsHelper.waitElementVisibilityOf(videoNameField);
        videoNameField.sendKeys(videoName);
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

    this.videoSearchByName = function (videoName) {
        expectedConditionsHelper.waitElementVisibilityOf(videoNameField);
        expectedConditionsHelper.waitElementToBeClickable(videoNameField);
        videoNameField.sendKeys(videoName);
    };

    this.checkValueInFilterIsPresent = function (videoName) {
        let value = element(by.xpath(`//tbody[@class="MuiTableBody-root"]//a[contains(., "${videoName}")]`));
        expectedConditionsHelper.waitElementVisibilityOf(value);
        return value.isPresent();
    };

    this.clickEdinBtn = function () {
        expectedConditionsHelper.waitElementToBeClickable(editBtn);
        editBtn.click();
    };

    this.checkVideoNameField = function (videoName) {
        let textNameField = element(by.xpath(`(//input[@value="${videoName}"])[2]`));
        expectedConditionsHelper.waitElementVisibilityOf(textNameField);
        return textNameField.isPresent();
    };

    this.clearVideoField = function () {
        expectedConditionsHelper.waitElementToBeClickable(videoNameField);
        clearHelper.clearForValueFields(videoNameField, 30);
    };

    this.changeVideoName = function (newRandomTitle) {
        expectedConditionsHelper.waitElementToBeClickable(videoNameField);
        videoNameField.sendKeys(`${newRandomTitle}`);
    };

    this.clickSaveButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(saveButton);
        saveButton.click();
    };

    this.checkSavePopupPresent = function () {
        expectedConditionsHelper.waitElementVisibilityOf(savePopup);
        return savePopup.isPresent();
    };

    this.clickBaсkButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(backButton);
        backButton.click();
    };

    this.checkNewValueInFilterIsPresent = function (newVideoName) {
        let value = element(by.xpath(`//tbody[@class="MuiTableBody-root"]//a[contains(., "${newVideoName}")]`));
        expectedConditionsHelper.waitElementVisibilityOf(value);
        return value.isPresent();
    };

    this.clickDeleteButton = function () {
        expectedConditionsHelper.waitElementVisibilityOf(deleteButton);
        deleteButton.click();
    };

    this.checkValueDescription = function (title) {
        let value = element(by.xpath(`//div[@class="MuiDialogTitle-root"]//h2[contains(., "${title}")]`));
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

module.exports = new VideoPage();
