const testrail = require('../../../helper/testrailHelper');
const dashboardPage = require('../../../pages/dashboardPages/DashboardPage');
const loginPage = require('../../../pages/dashboardPages/LoginPage');
const homePage = require('../../../pages/dashboardPages/HomePage');
const userData = require('../../../test_data/userData');
const funnelCreatePage = require('../../../pages/dashboardPages/CreateFunnelPage');
const config = require('../../../resources/config');
const constants = require('../../../resources/constants');
const funnelListPage = require('../../../pages/dashboardPages/FunnelListPage');
const randomUrl = userData.getRandomUrl();
const newRandomUrl= userData.getRandomUrl();

if (config.DOMAIN_NFS.domainIdOneLevel === global.nfs_e2e_domain_id) {
describe('Create New Funnel', function () {
    config.env === 'prod' && pending('Forse skip');

    beforeAll(function () {
        testrail.updateCase(1723, {custom_ui_automation_type: 1});
        testrail.updateCase(6609, {custom_ui_automation_type: 1});
        testrail.updateCase(1614, {custom_ui_automation_type: 1});
        testrail.updateCase(1688, {custom_ui_automation_type: 1});
        testrail.updateCase(1686, {custom_ui_automation_type: 1});
        testrail.updateCase(15712, {custom_ui_automation_type: 1});
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

    it('6609: Dashboard page', function () {
        funnelCreatePage.get();
        dashboardPage.clickAddButton();
    });

    it('6609: Add new funnel page', function () {
        funnelCreatePage.brandList();
        funnelCreatePage.chooseBrand();
        funnelCreatePage.funnelName(randomUrl);
        funnelCreatePage.clickTemplateField();
        funnelCreatePage.chooseTemplate();
        funnelCreatePage.clickSelectButton();
        funnelCreatePage.clickLanguageField();
        funnelCreatePage.chooseLanguage();
    });

    it('6609, 15712: Add new funnel page with video', function () {
        funnelCreatePage.domainList();
        funnelCreatePage.chooseDomain();
        funnelCreatePage.writeFunnelURI(randomUrl);
        funnelCreatePage.clcikAutologinToField();
        funnelCreatePage.chooseAutologinURL();
        funnelCreatePage.clickChoseVideoField();
        funnelCreatePage.enterVideo();
        funnelCreatePage.clickSaveButton();
        expect(funnelCreatePage.CheckValue(randomUrl)).toBeTruthy();
    });

    it('6609: Find a funnel through the filter', function () {
        funnelListPage.writeUriFunnel(randomUrl);
        expect(funnelListPage.CheckValueIsPresentAfterFirstSearch(randomUrl)).toBeTruthy();
    });

    it('1686: Edit funnel ', function () {
        funnelCreatePage.clickEditButton();
        funnelCreatePage.checkTextNameField(randomUrl);
        expect(funnelCreatePage.checkTextNameField(randomUrl)).toBeTruthy();
        funnelCreatePage.clearNameField();
        funnelCreatePage.changeNameField(newRandomUrl);
        funnelCreatePage.clickSaveButton();
        expect(funnelCreatePage.checkSavePopupPresent()).toBeTruthy();
    });

    it('1614, 1688: Find a funnel through the filter after changed', function () {
        funnelCreatePage.get();
        funnelListPage.writeNameFunnel(newRandomUrl);
        expect(funnelListPage.CheckValueIsPresentAfterSecondSearch(newRandomUrl)).toBeTruthy();
    });

    it('1614, 1688: Reset filter and search funnel again', function () {
        funnelListPage.clickResetFilter();
        expect(funnelListPage.CheckValueIsPresentAfterSecondSearch(newRandomUrl)).toBeTruthy();
        funnelListPage.writeUriFunnel(randomUrl);
        expect(funnelListPage.CheckValueIsPresentAfterFirstSearch(randomUrl)).toBeTruthy();
    });

    it('6609: Delete funnel', function () {
        funnelListPage.clickDeleteButton();
        expect(funnelListPage.checkFunnelNameIsPresent(newRandomUrl)).toBeTruthy();
        funnelListPage.clickOkButton();
        expect(funnelListPage.checkDeleteTitle()).toBeTruthy();
    });

    it('1723: Logout', function () {
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


