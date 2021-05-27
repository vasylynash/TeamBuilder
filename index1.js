const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const TemplateEngine = require("./src/TemplateEngine");
const managerQuestions = require("./src/questions").managerQuestions;
const engineerQuestions = require("./src/questions").engineerQuestions;
const internQuestions = require("./src/questions").internQuestions;
const addMemeberQuestion = require("./src/questions").addMemeberQuestion;

function buildTeam() {
    return new Promise((res, rej) => {

        const employees = [];

        function addManager() {
            inquirer.prompt(managerQuestions).then(({ name, employeeID, email, officeNumber }) => {
                const manager = new Manager(name, employeeID, email, officeNumber);
                employees.push(manager);
                addMember();
            })
        }

        function addEngineer() {
            inquirer.prompt(engineerQuestions).then(({ name, employeeID, email, gitHub }) => {
                const engineer = new Engineer(name, employeeID, email, gitHub);
                employees.push(engineer);
                addMember();
            })
        }

        function addIntern() {
            inquirer.prompt(internQuestions).then(({ name, employeeID, email, school }) => {
                const intern = new Intern(name, employeeID, email, school);
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
                    case "Team complete": res(employees);
                }
            });
        }
        addManager();
    })
}
function init() {
    buildTeam().then(employees => {
        const employeesHTML = employees.map(el => el.getHTML()).join("");
        const template = new TemplateEngine("./src/index.html");
        template.setData({ employees: employeesHTML });
        const result = template.getHTML();
        fs.writeFileSync("./dist/index1.html", result);
    })
}
init();