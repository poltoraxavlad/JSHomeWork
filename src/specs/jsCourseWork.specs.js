const userData = require('../resources/test_data/userData');
const constants = require('../resources/constants');
const funnelPage = require('../resources/pages/funnelPage');

const randomEmail = userData.getRandomEmail();

describe('Registration on test funnel', function (){
    it('Open test page', async function () {
        await funnelPage.get();

        expect(await browser.getTitle()).toEqual(constants.funnelData.pageTitle);
    });

    it('Create lead', async function () {
        await funnelPage.inputFirstNameField(constants.userData.firstName);
        await funnelPage.inputLastNameField(constants.userData.lastName);
        await funnelPage.inputMobilePhoneField(constants.userData.mobilePhone);
        await funnelPage.inputMailField(randomEmail);
        await funnelPage.clickSubmitButton();

        expect(await funnelPage.popIsDisplayed());
        expect(await funnelPage.getPopUpText()).toEqual(constants.textPopup.TYPOP_UP);
    });

    it('Pop is displayed', async function (){
        await funnelPage.clickPopUpButton();

        expect(!funnelPage.popIsDisplayed()).toBe(false);
    });
});