const TemplateEngine = require("../src/TemplateEngine");

describe("Template engine class", () => {
    it("should replace the value of the placeholder", () => {
        const template = new TemplateEngine("./test/res/test1.html");
        template.setData({ testKey: "testValue" });
        expect(template.getHTML()).toEqual("testValue");
    })
})