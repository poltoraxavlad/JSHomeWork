const findLangText = {
    findEsText: element(by.xpath("//*[contains(text(), 'Plataforma')]")),
    findItText: element(by.xpath("//*[contains(text(), 'Piattaforma')]")),
    findDeText: element(by.xpath("//*[contains(text(), 'Sichere')]")),
    findEnText: element(by.xpath("//*[contains(text(), 'Secure')]")),
    findSvText: element(by.xpath("//*[contains(text(), 'Säker')]")),
    findRuText: element(by.xpath("//*[contains(text(), 'Защищённая')]")),
    findArText: element(by.xpath("//*[contains(text(), 'منصة')]")),
    findPtText: element(by.xpath("//*[contains(text(), 'Plataforma')]")),
    findThText: element(by.xpath("//*[contains(text(), 'แพลตฟ')]")),
    findNlText: element(by.xpath("//*[contains(text(), 'Veilig')]")),
    findPlText: element(by.xpath("//*[contains(text(), 'Bezpieczna')]"))
};

class Request {
    constructor(templateName, funnelLanguage, funnelUrl, id, idFunnel, findText, constantLanguage) {
        this.findText = findText;
        this.templateName = templateName;
        this.funnelLanguage = funnelLanguage;
        this.funnelUrl = funnelUrl;
        this.id = id;
        this.idFunnel = idFunnel;
        this.constantLanguage = constantLanguage;
    }

    async main() {
        browser.get(this.funnelUrl);

        const res = await this.findText.getText();
        expect(res.replace(/(\r\n|\n|\r)/gm, ' ')).toBe(this.constantLanguage);

        console.log("Template name:", this.templateName, "Language:", this.funnelLanguage,
            `${this.funnelUrl} =${this.id}`, this.idFunnel);
    }
}

module.exports = {
    request: function (templateName, funnelLanguage, funnelUrl, id, idFunnel, findLangText, constLang) {
        return new Request(templateName, funnelLanguage, funnelUrl, id, idFunnel, findLangText,
            constLang).main();
    },
    findLangText
};
