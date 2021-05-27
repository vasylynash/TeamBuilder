const TemplateEngine = require("../src/TemplateEngine");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };

    getHTML() {
        const template = new TemplateEngine(this.templateName);
        template.setData(this);
        return template.getHTML();
    }
}

module.exports = Employee;