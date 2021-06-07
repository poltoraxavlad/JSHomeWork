const onPrepare = function() {
    browser
        .manage()
        .window()
        .maximize();
    browser.waitForAngularEnabled(false);
};

module.exports = {
    onPrepare
};