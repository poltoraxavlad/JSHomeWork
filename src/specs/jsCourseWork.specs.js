const userData = require('../resources/test_data/userData');
const constants = require('../resources/constants');
const FunnelPage = require('../resources/pages/funnelPage');

const randomEmail = userData.getRandomEmail();

describe('Registration on test funnel', function (){
    it('Open test page', async function () {
        await FunnelPage.get();
        expect(await browser.getTitle()).toEqual(constants.funnelData.pageTitle);
    });

    it('Create lead', async function () {
        await FunnelPage.inputFirstNameField(constants.userData.firstName);
        await FunnelPage.inputLastNameField(constants.userData.lastName);
        await FunnelPage.inputMobilePhoneField(constants.userData.mobilePhone);
        await FunnelPage.inputMailField(randomEmail);
        await FunnelPage.clickSubmitButton();
        expect(await FunnelPage.popIsDisplayed());
        expect(await FunnelPage.getPopUpText()).toEqual(constants.textPopup.TYPOP_UP);
    });

    it('Assert element', async function (){
        await FunnelPage.clickPopUpButton();
        expect(await !FunnelPage.popIsDisplayed()).toBe(false);
    });
});