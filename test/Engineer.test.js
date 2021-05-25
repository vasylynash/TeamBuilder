const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("should return correct github username when getGihub() is called", () => {
        const engineer = new Engineer("jane", 2, "jane@gmail.com", "janedoe");
        expect(engineer.getGithub()).toEqual("janedoe")
    });

    it("should return Engineer when getRole() is called", () => {
        const engineer = new Engineer("jane", 2, "jane@gmail.com", "janedoe");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});