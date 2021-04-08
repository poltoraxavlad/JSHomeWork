const config = require('../resources/config');

const getdataForEmail = function getCurrentTime() {
    let mounth = new Date().getUTCMonth() + 1;
    const Data = new Date();
    return Data.getFullYear() + "." + mounth + "." + Data.getDate() +
           "." + Data.getHours() + "." + Data.getMinutes() +
           "." + Data.getSeconds() + "." + Data.getMilliseconds();
};

let getRandomEmail = function () {
    return `nfs_e2e_ui${getdataForEmail()}@mailinator.com`;
};

let getRandomUrl  = function () {
    const randomPrefix = Math.floor(Math.random() * 900000);
    return `url_nfs_e2e_ui_${randomPrefix}`;
};

let getRandomTitle  = function () {
    const randomPrefix = Math.floor(Math.random() * 9000);
    return `title_nfs_e2e_ui_${randomPrefix}`;
};

let getRandomSlug  = function () {
    const randomPrefix = Math.floor(Math.random() * 9000);
    return `slug_nfs_e2e_ui_${randomPrefix}`;
};

let getRandomDescription = function (length) {
    const randomPrefix = (length) => {
        return  Math.floor(Math.random() * length);
    };
    const generateID = (length) => {
        const possible = "abcdefghijklmnopqrstuvwxyz";
        let text = "";
        for (let i = 0; i < length; i++) {
            text += possible.charAt(randomPrefix(possible.length));
        }
        return text
    };
    return `test.${generateID(length)}`;
};

const customer = {
    client_id: config.client_id,
    client_secret: config.client_secret,
    grant_type: 'password',
    username: 'qa-automation@test.com',
    password: '1mo!AU)zC-Yd:h'
};

let userDataForItradeProftit = {
    username: "api_e2e_nfs_user",
    password:  "Qwerty123@"
};

/** Generate mobile phone for Itrads brands**/

let getRandomEmailForItradeBrands = function (email) {
    const randomPrefix = Math.floor(Math.random() * `${email}`);
    return `test_ui${randomPrefix}@mailinator.com`;
};

let getRandomPhoneNumber = function (phoneId) {
    return `${phoneId}${Math.floor(Math.random() * (Math.floor(999999) - Math.ceil(100000))) + Math.ceil(100000)}`;
};

const getdata = function getCurrentTime() {
    let mounth = new Date().getUTCMonth() + 1 ;
    const Data = new Date();
    return Data.getFullYear() + "-" + mounth  + "-"+ Data.getDate() + "T";
};

module.exports = {
    customer: customer,
    getRandomEmail,
    getRandomUrl,
    getRandomDescription,
    userDataForItradeProftit,
    getRandomPhoneNumber,
    getRandomEmailForItradeBrands,
    getRandomTitle,
    getRandomSlug,
    getdata
};
