/** Pages title*/
const pageTitle = {
    dashboard: "Dashboard 2.0"
};

const funnelData = {
    PAGE_TITLE: "funnel",
    JQUERY_VERSION: "3.0.0",
    EXIT_INTENT_TYPE: "brute"
};

const textPopup = {
    SAVE: "The changes were successfully saved",
    DELETE: "DELETED",
    ADDED: "ADDED",
    DOMAIN_UPDATED: "Domain is updated!"
};

const userData = {
    fullName: "test test",
    firstNameFiled: "test",
    lastNameField: "test",
    writeMobilePhone: "505050505",
    writePassword: "Pikachu1995",
    country: "Saudi Arabia",
    countryPrefix: "+966"
};

const deleteStatus = {
    DELETE_STATUS: '{"data":null,"meta":null,"pagination":null,"errors":null}'
};

const domainData = {
    descriptionValue: "test",
    domainInputName: "domain",
    descriptionInputName: "description",
    editButtonTitle: "Edit"
};

const videoData = {
    videoInputName: "title",
    editButtonTitle: "Edit"
};

const dataOnSecondStepTradefw = {
    address: "Test address 11",
    city: "Test city",
    zipCode: "1111"
};

const markParams = {
    TradeFWcampaignID: '1048',
    CapitalixCampaign: "530000012",
    subc: "wfbphbodp1kj57h02sp2ff9u",
    adid: "0d9e8fd0-ce58-11e9-b2bb-7d949d328a05",
    voluumCampaign: "a162362e-c39f-47e1-bde5-9ff194a13b31",
    target: "900c90a3-a953-4d55-896a-fbcd7124e378/",
    widget: "fitnessmorale.com",
};

const marketingParams = {
    insertMarketingParamsTradeFW: `?link=${markParams.TradeFWcampaignID}&subc=${markParams.subc}`,
    insertMarketingParamsCapitalix: `?link=${markParams.CapitalixCampaign}&subc=${markParams.subc}`
};

const domainSize = {
    size: 900
};

const template = {
    bitcoin_code: "TestR&D-bitcoin-code",
    tesler: "TestR&D-the-tesler-cms",
    amzNoredirect: "amz_es_m",
    noredirect: "TestR&D-cms-am_info_es_k",
    beyong: "TestR&D-beyond_4f",
    bitkoinFullName: "TestR&D-bitcoin-code_full_name",
    crmAmInfoEsK: "TestR&D-cms-am_info_es_k"
};

const brandValues = {
    baseURL: "https://terst.com"
};

const campaignNameForNoRedirect= {
    capitalix: "Test - Global - Capitalix-NO_REDIRECT_TEST_DO_NOT_DELETE_QA_AUTO",
    "101investing": "Test - Global - 101investing-NO_REDIRECT_TEST_DO_NOT_DELETE_QA_AUTO",
    tradeFW: "Test - Global - TradeFW-NO_REDIRECT_TEST_DO_NOT_DELETE_QA_AUTO",
    forexTB: "Test - Global - ForexTB-NO_REDIRECT_TEST_DO_NOT_DELETE_QA_AUTO",
};

const country = {
    netherlands: "Netherlands",
    arabic: "Saudi Arabia"
};

const phraseOnAllLanguage = {
    "en": "Secure and regulated platform",
    "es": "Plataforma segura y regulada",
    "it": "Piattaforma sicura e regolata",
    "pt": "Plataforma segura e regulada",
    "de": "Sichere und regulierte Plattform",
    "ar": "منصة آمنة ومُرخصة",
    "nl": "Veilig en gereguleerd platform",
    "sv": "Säker och reglerad plattform",
    "th": "แพลตฟอร์มที่ปลอดภัยและได้รับการควบคุม",
    "pl": "Bezpieczna platforma podlegająca regulacjom prawnym",
    "ru": "Защищённая платформа, работа которой регламентирована"

};

module.exports = {
    pageTitle,
    funnelData,
    textPopup,
    domainData,
    videoData,
    deleteStatus,
    userData,
    dataOnSecondStepTradefw,
    marketingParams,
    markParams,
    domainSize,
    template,
    brandValues,
    campaignNameForNoRedirect,
    country,
    phraseOnAllLanguage
};
