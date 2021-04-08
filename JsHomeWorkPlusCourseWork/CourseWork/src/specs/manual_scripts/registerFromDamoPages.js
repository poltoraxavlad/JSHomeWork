const itradesBrandsData = require('../../test_data/itrades_brands_data');
const userData = require('../../test_data/userData');
const loader = element(by.xpath('//div[@class="afs-loader"]'));
const emailField = element(by.xpath("(//input[@name ='user_email'])[3]"));
const fullName = element(by.xpath("//input[@name ='full_name']"));
const demoPage = require('../../pages/demoPages/RegisterDataPage');
const popup = require('../../pages/demoPages/PopupToDemoPage');

let email, phone, country;

describe('Funnels testing', function () {
    it('Funnel test', async function () {
        let value = itradesBrandsData.itradesDomain;
        for (let domain in value) {
            email = value[domain].email;
            phone = value[domain].phoneID;
            country = value[domain].countryID;
            browser.get(`https://${domain}/demo-page`);
            if ( !await fullName.isPresent() || await emailField.isPresent()) {
                demoPage.notRedirectForm(userData.getRandomEmailForItradeBrands(email), userData.getRandomPhoneNumber(phone), country);
                expect(popup.waitPopup()).toBeTruthy();
                popup.closePopup();

                demoPage.redirectForm(userData.getRandomEmailForItradeBrands(email), userData.getRandomPhoneNumber(phone), country);
                expect(loader.isPresent()).toBeTruthy();
            } else {
                demoPage.notRedirectForm(userData.getRandomEmailForItradeBrands(email), userData.getRandomPhoneNumber(phone), country);
                expect(popup.waitPopup()).toBeTruthy();
                popup.closePopup();

                demoPage.fullNameData(userData.getRandomEmailForItradeBrands(email), userData.getRandomPhoneNumber(phone), country);
                expect(loader.isPresent()).toBeTruthy();
            }
        }
    });
});
