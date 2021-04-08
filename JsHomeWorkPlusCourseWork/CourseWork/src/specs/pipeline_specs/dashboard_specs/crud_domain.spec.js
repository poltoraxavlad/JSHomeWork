const testrail = require('../../../helper/testrailHelper');
const domainPage = require('../../../pages/dashboardPages/DomainPage');
const loginPage = require('../../../pages/dashboardPages/LoginPage');
const homePage = require('../../../pages/dashboardPages/HomePage');
const userData = require('../../../test_data/userData');
const config = require('../../../resources/config');
const constants = require('../../../resources/constants');

const randomDescription = userData.getRandomDescription(10);
const newRandomDescription = userData.getRandomDescription(10);

if (config.DOMAIN_NFS.domainIdOneLevel === global.nfs_e2e_domain_id) {
describe('Create New Domain', function () {
    config.env === 'prod' && pending('Forse skip');

    beforeAll(function () {
        testrail.updateCase(1635, { custom_ui_automation_type: 1 });
        testrail.updateCase(1625, { custom_ui_automation_type: 1 });
        testrail.updateCase(1626, { custom_ui_automation_type: 1 });
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

    it('1635: Click add button', function () {
        domainPage.get();
        domainPage.clickAddButton();
    });

    it('1635: Creat new domain', function () {
        domainPage.writeDomain(randomDescription);
        domainPage.writeDescription(randomDescription);
        domainPage.clickSaveButton();
        expect(domainPage.checkAddPopupPresent()).toBeTruthy();
    });

    it('1625: Search and filter domain', function () {
        domainPage.clickFilterButton();
        domainPage.domainSearch(randomDescription);
        expect(domainPage.checkValueInFilterIsPresent(randomDescription)).toBeTruthy();
    });

    it('1625, 1626: Reset filter and search again', function () {
        domainPage.clickResetFilter();
        domainPage.domainSearch(randomDescription);
        expect(domainPage.checkValueInFilterIsPresent(randomDescription)).toBeTruthy();
    });

    it('1635: Edit domain ', function () {
        domainPage.clickEdinBtn();
        domainPage.checkTextDomainField(randomDescription);
        expect(domainPage.checkTextDomainField(randomDescription)).toBeTruthy();
        domainPage.clearDescriptionField();
        domainPage.changeDescriptionField(newRandomDescription);
        domainPage.clickSaveButton();
        expect(domainPage.checkDomainUpdatedPopupPresent()).toBeTruthy();
    });

    it('1625: Search domain after changed', function () {
        domainPage.get();
        domainPage.clickFilterButton();
        domainPage.searchByDescription(newRandomDescription);
        expect(domainPage.checkNewDescriptionValueIsPresent(newRandomDescription)).toBeTruthy();
    });

    it('1635: Delete domain', function () {
        domainPage.clickDeleteButton();
        expect(domainPage.checkValueDescription(randomDescription)).toBeTruthy();
        domainPage.clickOkButton();
        expect(domainPage.checkDeleteTitle()).toBeTruthy();
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
