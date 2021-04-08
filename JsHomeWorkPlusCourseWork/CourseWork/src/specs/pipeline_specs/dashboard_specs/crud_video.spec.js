const testrail = require('../../../helper/testrailHelper');
const videoPage = require('../../../pages/dashboardPages/VideoPage');
const loginPage = require('../../../pages/dashboardPages/LoginPage');
const homePage = require('../../../pages/dashboardPages/HomePage');
const userData = require('../../../test_data/userData');
const config = require('../../../resources/config');
const constants = require('../../../resources/constants');

const randomTitle = userData.getRandomTitle();
const newRandomTitle = userData.getRandomTitle();
const randomSlug = userData.getRandomSlug();


if (config.DOMAIN_NFS.domainIdOneLevel === global.nfs_e2e_domain_id) {
describe('Create New Video', function () {
    config.env === 'prod' && pending('Forse skip');

    beforeAll(function () {
        testrail.updateCase(1639, { custom_ui_automation_type: 1 });
        testrail.updateCase(1617, { custom_ui_automation_type: 1 });
        testrail.updateCase(1643, { custom_ui_automation_type: 1 });
    });

    it('1723: Open Dashboard', function () {
        loginPage.get();
        expect(browser.getTitle()).toEqual(constants.pageTitle.dashboard);
    });

    it('1723: Login user', function () {
        loginPage.setEmail();
        loginPage.setPassword();
        loginPage.clickToLoginButton();
        expect(homePage.getEmail()).toEqual(config.userEmail);
    });

    it('1639: Click add button', function () {
        videoPage.get();
        videoPage.clickAddButton();
    });

    it('1639: Create new Video', function () {
        videoPage.writeVideo(randomTitle);
        videoPage.clickSaveButton();
        expect(videoPage.checkAddPopupPresent()).toBeTruthy();
    });

    it('1617, 1643: Search and filter Video', function () {
        videoPage.clickFilterButton();
        videoPage.videoSearchByName(randomTitle);
        expect(videoPage.checkValueInFilterIsPresent(randomTitle)).toBeTruthy();
    });

    it('1639: Edit Video ', function () {
        videoPage.clickEdinBtn();
        videoPage.checkVideoNameField(randomTitle);
        expect(videoPage.checkVideoNameField(randomTitle)).toBeTruthy();
        videoPage.clearVideoField();
        videoPage.changeVideoName(newRandomTitle);
        videoPage.clickSaveButton();
        expect(videoPage.checkSavePopupPresent()).toBeTruthy();
    });

    it('1617: Search Video after changed', function () {
        videoPage.clickBaсkButton();
        videoPage.clickFilterButton();
        videoPage.videoSearchByName(newRandomTitle);
        expect(videoPage.checkNewValueInFilterIsPresent(newRandomTitle)).toBeTruthy();
    });

    it('1639: Delete Video', function () {
        videoPage.clickDeleteButton();
        expect(videoPage.checkValueDescription(newRandomTitle)).toBeTruthy();
        videoPage.clickOkButton();
        expect(videoPage.checkDeleteTitle()).toBeTruthy();
    });

    it('1723: Logout', function() {
        homePage.clickToUserMenu();
        homePage.clickToLogoutButton();
        expect(browser.getTitle()).toEqual(constants.pageTitle.dashboard);
    });

    afterAll(async function () {
        await browser.manage().deleteAllCookies();
    });
});
} else {
    describe('Skip test', function () {it('Skip test', function () {})})
};
