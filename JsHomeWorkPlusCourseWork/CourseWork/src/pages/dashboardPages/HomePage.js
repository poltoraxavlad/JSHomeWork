const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const userEmail  = element(by.xpath('//span[text()="qa-automation@test.com"]'));
const userMenuButton = element(by.css('button[data-autotests="app_prelogout"]'));
const logoutButton = element(by.xpath('//span[@role="menuitem"]'));

const HomePage = function() {
    this.getEmail = function() {
        expectedConditionsHelper.waitElementPresent(userEmail);
        return userEmail.getText();
    };

    this.clickToUserMenu = function() {
        expectedConditionsHelper.waitElementToBeClickable(userMenuButton);
        userMenuButton.click();
    };

    this.clickToLogoutButton = async function() {
        expectedConditionsHelper.waitElementToBeClickable(logoutButton);
        logoutButton.click();
    };
};

module.exports = new HomePage();
