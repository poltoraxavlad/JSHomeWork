const testrail = require('../../../helper/testrailHelper');
const loginPage = require('../../../pages/dashboardPages/LoginPage');
const homePage = require('../../../pages/dashboardPages/HomePage');
const userData = require('../../../test_data/userData');
const createBrandPage = require('../../../pages/dashboardPages/CreateBrandPage');
const config = require('../../../resources/config');
const constants = require('../../../resources/constants');

const randomTitle = userData.getRandomTitle();
const randomSlug = userData.getRandomSlug();

if (config.DOMAIN_NFS.domainIdOneLevel === global.nfs_e2e_domain_id) {
describe('Create New Brand', function () {
    config.env === 'prod' && pending('Forse skip');

    beforeAll(function () {
        testrail.updateCase(1649, { custom_ui_automation_type: 1 });
        testrail.updateCase(1653, { custom_ui_automation_type: 1 });
        testrail.updateCase(1654, { custom_ui_automation_type: 1 });
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

    it('1649: Brand page', function () {
        createBrandPage.get();
        createBrandPage.clickAddButton();
    });

    it('1649: Create Brand page', function () {
        createBrandPage.writeTitle(randomTitle);
        createBrandPage.writeSlug(randomSlug);
        createBrandPage.writeBaseURL();
        createBrandPage.clickToCRMInput();
        createBrandPage.enterCRM();
        createBrandPage.clickSaveButton();
        expect(createBrandPage.checkAddPopupPresent()).toBeTruthy();
    });

    it('1653, 1654: Reset filter and search brand', function () {
        createBrandPage.clickFilterButton();
        createBrandPage.sendBaseURL();
        expect(createBrandPage.сheckValueIsPresentAfterFirstSearch(randomTitle)).toBeTruthy();
        createBrandPage.clickResetFilter();
        createBrandPage.searchBrandByTitle(randomTitle);
        expect(createBrandPage.сheckValueIsPresentAfterFirstSearch(randomTitle)).toBeTruthy();
    });

    it('1649: Edit brand', function () {
        createBrandPage.clickEditButton();
        createBrandPage.clickBrandField();
        createBrandPage.chooseBrand();
        createBrandPage.clickSaveButton();
        expect(createBrandPage.checkSavePopupPresent()).toBeTruthy();
    });

    it('1653: Search brand after edit', function () {
        createBrandPage.clickBaсkButton();
        createBrandPage.clickFilterButton();
        createBrandPage.searchBrandByTitle(randomTitle);
        expect(createBrandPage.сheckValueIsPresentAfterFirstSearch(randomTitle)).toBeTruthy();
    });

    it('1649: Delete brand', function () {
        createBrandPage.clickDeleteButton();
        expect(createBrandPage.checkBrandNameIsPresent(randomTitle)).toBeTruthy();
        createBrandPage.clickOkButton();
        expect(createBrandPage.checkDeleteTitle()).toBeTruthy();
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
