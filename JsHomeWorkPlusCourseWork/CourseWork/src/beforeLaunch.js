const apiHelper = require('./helper/dashboardHelper/apiHelper');
const domainData = require('./test_data/domainData');
const config = require('./resources/config');
const sleep = require('util').promisify(setTimeout);

let token, nfs_e2e_domain_id, domainName;

const beforeLaunch = async function () {
    //Create domain for continuous deployment
    const nfs_domain = process.env.NFS_DOMAIN || config.DOMAIN_NFS.domainName;

    /** If the value in the system variable is not equal to the default, then get a token and search
     *  by the domain name that we transfer through the system variable
     *  otherwise global.nfs_e2e_domain_id === default domain from env**/

    if (nfs_domain !== config.DOMAIN_NFS.domainName) {
        // Get token
        token = await apiHelper.gerCustomerToken();

        //Checking that the domain already exists
        await sleep(2000);
        domainName = await apiHelper.searchDomain(token, nfs_domain);

        /** If after the search we get a status not 200, then we add a new domain name to the dashboard,
         * otherwise we take the domain that was found when the ApiCall was used to find the domain **/

        if (domainName.statusCode !== 200) {

            // Create new domain and get domain ID
            domainData.domainData.domain = nfs_domain;
            domainData.domainData.description = nfs_domain;

            const res = await apiHelper.createDomain(token);
            nfs_e2e_domain_id = res.body.data[0].id;
            console.log("The new create domain", nfs_e2e_domain_id)
        } else {
            nfs_e2e_domain_id = domainName.body.data[0].id;
            console.log("An existing domain was used", nfs_e2e_domain_id)
        }
    } else {
        //Used default domain
        nfs_e2e_domain_id = config.DOMAIN_NFS.domainIdOneLevel;
        console.log("Used default domain", nfs_e2e_domain_id)
    }
};

module.exports = {
    beforeLaunch
};
