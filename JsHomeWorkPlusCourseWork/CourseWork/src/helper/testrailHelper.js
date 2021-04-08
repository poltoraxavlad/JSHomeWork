const Testrail = require('testrail-api');

let testrail = new Testrail({
    host: 'https://blackrockng.testrail.io/',
    user: 'ruslan.lizogub@clicklogiq.com',
    password: 'Qwerty123@'
});

module.exports = testrail;
