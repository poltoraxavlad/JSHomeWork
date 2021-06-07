const userData = require('../resources/test_data/userData');
const registrationHelper = require('../helper/registrationHelper/registerStepsHelper');
const constants = require('../resources/constants');
const button = element(by.id("lead-form-submit"));
const popUp = element(by.xpath('//div[@class="nrp__t1"]'));

const randomEmail = userData.getRandomEmail();
const funnelURL = constants.url.funnelURL;

describe('Registration on test funnel', function (){
    it('Open test page', async function () {
        await browser.get(funnelURL)
        expect(await button.isPresent()).toBe(true);
    });

    it('Create lead', async function () {
        await registrationHelper.registerDataForOneStepFunnelWithoutPassword(randomEmail);
    });

    it('Assert element', async function (){
        browser.wait( await popUp.isDisplayed);
        expect(await popUp.isPresent()).toBe(true);
        expect(await popUp.getText()).toEqual(constants.textPopup.TYPOP_UP);

        await browser.manage().deleteAllCookies();
    });
});