const config = require('../config');

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

let getRandomPhoneNumber = function (phoneId) {
    return `${phoneId}${Math.floor(Math.random() * (Math.floor(999999) - Math.ceil(100000))) + Math.ceil(100000)}`;
};

module.exports = {
    getRandomEmail,
    getRandomPhoneNumber
};
