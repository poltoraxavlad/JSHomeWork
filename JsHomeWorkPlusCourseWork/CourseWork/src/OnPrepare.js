const {SpecReporter} = require('jasmine-spec-reporter');
const AllureReporter = require('jasmine-allure-reporter');
const apiHelper = require('./helper/dashboardHelper/apiHelper');
const config = require('./resources/config');

let token;

global.nfs_e2e_results = [];

const onPrepare = async () => {
     browser
        .manage()
        .window()
        .maximize();
    browser.waitForAngularEnabled(false);

    jasmine.getEnv().addReporter(
        new SpecReporter({
            spec: {displayStacktrace: true},
        }),
    );

    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment(
                'Screenshot',
                function () {
                    return Buffer.from(png, 'base64');
                },
                'image/png',
            )();
            done();
        });
    });

    // Save test results for TestRail which will be use in OnCleanUp.js
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            global.nfs_e2e_results.push(result);
        }
    });

    //Create domain for continuous deployment
    const nfs_domain = process.env.NFS_DOMAIN || config.DOMAIN_NFS.domainName;

    if (nfs_domain !== config.DOMAIN_NFS.domainName) {
        // Get token
        token = await apiHelper.gerCustomerToken();

        //Checking that the domain already exists
        const domainName = await apiHelper.searchDomain(token, nfs_domain);

        if (domainName.statusCode === 200) {
            global.nfs_e2e_domain_id = domainName.body.data[0].id;
            console.log("An existing domain was used", global.nfs_e2e_domain_id)
        }
    } else {
        //Used default domain
        global.nfs_e2e_domain_id = config.DOMAIN_NFS.domainIdOneLevel;
        console.log("Used default domain", global.nfs_e2e_domain_id)
    }
};

module.exports = {
    onPrepare,
    SpecReporter,
};
