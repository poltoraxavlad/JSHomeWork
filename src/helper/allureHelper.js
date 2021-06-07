module.exports = {
    logMe(name) {
        //TODO fix the 'allure is not define' error and remove try/catch
        try {
            let step = allure.createStep(name,  function() {});
            return step();
        } catch (e) {}
    }
};
