const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("should return correct name when getName() is called", () => {
        const employee = new Employee("Jane", 1, "jane@gmail.com");
        expect(employee.getName()).toEqual("Jane");
    });

    it("should return correct id when getId() is called", () => {
        const employee = new Employee("Jane", 1, "jane@gmail.com");
        expect(employee.getId()).toEqual(1);
    });

    it("should return correct email when getEmail() is called", () => {
        const employee = new Employee("Jane", 1, "jane@gmail.com");
        expect(employee.getEmail()).toEqual("jane@gmail.com");
    });

    it("should return Employee when getRole() is called", () => {
        const employee = new Employee("Jane", 1, "jane@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
})