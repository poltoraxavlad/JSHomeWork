const buildUrlHelper = async function (domain, env, funnel_uri) {
    let domainsFullName = await domain.split('.');
    domainsFullName[0] = `${domainsFullName[0]}${env}`;
    return `https://${domainsFullName.join('.')}${funnel_uri}`;
};

const buildUrlHelperWithDot = async function(domain, env, funnel_uri){
    let domainsFullName = await domain.split('.');
    domainsFullName[0] = `${env}${domainsFullName[0]}`;
    return `https://${domainsFullName.join('.')}${funnel_uri}`;
};

module.exports = {
    buildUrlHelper,
    buildUrlHelperWithDot,
};
