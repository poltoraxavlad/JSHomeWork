const getdataForEmail = function getCurrentTime() {
    let mounth = new Date().getUTCMonth() + 1;
    const Data = new Date();
    return Data.getFullYear() + "." + mounth + "." + Data.getDate() +
        "." + Data.getHours() + "." + Data.getMinutes() +
        "." + Data.getSeconds() + "." + Data.getMilliseconds();
};

let getRandomEmail = function () {
    return `test${getdataForEmail()}@mailinator.com`;
};

module.exports = {
    getRandomEmail,
};
