const apiHelper = require('../../helper/dashboardHelper/apiHelper');
const funnels_data = require('../../test_data/funnels_data');
const assert = require('assert');

describe('Voluume status  testing', function () {
    it('Test Voluume status', async function () {
        let idUsers = funnels_data.idUsers;
        for (let id = 0; id < idUsers.length; id++) {
            const res = await apiHelper.getStatusVoluume(idUsers[id]);
            console.log(`${idUsers[id]} res.text =`, res.text);
            assert.equal(`{"data":{"status":"in processing"}}`, res.text);
            assert.equal(200, res.statusCode);
        }
    });
});
