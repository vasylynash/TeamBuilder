const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerQuestions = require("./questions").managerQuestions;
const engineerQuestions = require("./questions").engineerQuestions;
const internQuestions = require("./questions").internQuestions;
const addMemeberQuestion = require("./questions").addMemeberQuestion;

const employees = [];

function buildTeam() {
    inquirer.prompt(managerQuestions).then(({ name, employeeID, email, officeNumber }) => {
        const manager = new Manager(name, employeeID, email, officeNumber);
        // console.log(manager);
        employees.push(manager);
        addMember();
    })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions).then(({ name, employeeID, email, gitHub }) => {
        const engineer = new Engineer(name, employeeID, email, gitHub);
        // console.log(engineer);
        employees.push(engineer);
        addMember();
    })
}

function addIntern() {
    inquirer.prompt(internQuestions).then(({ name, employeeID, email, school }) => {
        const intern = new Intern(name, employeeID, email, school);
        // console.log(intern);
        employees.push(intern);
        addMember();
    })
}

function addMember() {
    inquirer.prompt(addMemeberQuestion).then(answers => {
        const type = answers.addMember;
        switch (type) {
            case "Engineer": addEngineer();
                break;
            case "Intern": addIntern();
                break;
            case "Team complete": return "Team Complete";
        }
    });
}

function init() {
    buildTeam();

}
init();