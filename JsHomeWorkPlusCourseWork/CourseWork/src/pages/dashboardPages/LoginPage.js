const config = require('../../resources/config');
const emailField  = element(by.xpath('//input[@name="username"]'));
const passwField  = element(by.xpath('//input[@name="password"]'));
const loginButton = element(by.xpath('//button[@type="submit"]'));

const LoginPage = function() {
    this.get = function() {
        browser.get(config.baseURL);
    };

    this.setEmail = function() {
        emailField.sendKeys(config.userEmail)
    };

    this.setPassword = function() {
        passwField.sendKeys(config.userPassword)
    };

    this.clickToLoginButton = function() {
        loginButton.click();
    };
};

module.exports = new LoginPage();
