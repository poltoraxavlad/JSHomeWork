const expectedConditionsHelper = require('../../helper/generalHelper/expectedConditionsHelper');
const buttonAdd = element(by.xpath('//button[@data-autotests=("nfs_funnels_toolbar_add-new-button")]'));

const DashboardPage = function () {
    this.clickAddButton = function () {
        expectedConditionsHelper.waitElementToBeClickable(buttonAdd);
        buttonAdd.click();
    };
};

module.exports= new DashboardPage();
