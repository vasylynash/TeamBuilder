const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.templateName = "./src/engineer.html";
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
}

module.exports = Engineer;