const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("should return school when getSchool() is called", () => {
        const intern = new Intern("john", 3, "john@gmail.com", "Davis");
        expect(intern.getSchool()).toEqual("Davis");
    });

    it("should return Intern when getProle() is called", () => {
        const intern = new Intern("john", 3, "john@gmail.com", "Davis");
        expect(intern.getRole()).toEqual("Intern");
    });
});