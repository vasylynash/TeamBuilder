const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("should return Manager when getRole is called", () => {
        const manager = new Manager("Mark", 5, "mark@gmail.com", 123);
        expect(manager.getRole()).toEqual("Manager");
    });
});