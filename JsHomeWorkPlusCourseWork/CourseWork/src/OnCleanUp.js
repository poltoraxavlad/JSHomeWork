const testrail = require('./helper/testrailHelper');
const run_id = process.env.RUN_ID || 0;

const onCleanUp = async () => {
    // Update testRail by run id
    try {
        if (run_id != 0) {
            for (let i = 0; i < global.nfs_e2e_results.length; i++) {
                // Get case title and state
                let title = global.nfs_e2e_results[i].description;
                let state = global.nfs_e2e_results[i].status;

                // Replace ":" and " " to ","
                const titleArray = title.replace(/[:]/g, ',').replace(/[ ]/g, ',').split(',');

                // Check than case is present in TestRun and update its status
                const {body:tests} = await testrail.getTests(/*RUN_ID=*/run_id);
                for (let i = 0; i < tests.length; i++) {
                    for (let c = 0; c < titleArray.length; c++) {
                        if (titleArray[c] == tests[i].case_id) {
                            if (state === "passed") {
                                console.log(`Test case ${titleArray[c]} was passed. Result was added into test run ${run_id}.`);
                                await testrail.addResultForCase(/*RUN_ID=*/run_id, /*CASE_ID=*/titleArray[c], /*CONTENT=*/{status_id: 1});
                            } else {
                                console.log(`Test case ${titleArray[c]} was failed. Result was added into test run ${run_id}.`);
                                await testrail.addResultForCase(/*RUN_ID=*/run_id, /*CASE_ID=*/titleArray[c], /*CONTENT=*/{status_id: 5});
                            }
                        }
                    }
                }
            }
        }
    } catch (err) {
        console.log("TestRail update error =", err);
    }
};

module.exports = {onCleanUp};
