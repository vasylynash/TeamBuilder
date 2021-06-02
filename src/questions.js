const validateInput = require("./validation");

const managerQuestions = [
    {
        type: "input",
        message: "Enter manager's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter employee ID",
        name: "employeeID",
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email",
        emailValidation: true,
    },
    {
        type: "input",
        message: "Enter office number",
        name: "officeNumber",
    },
];

const addMemberQuestion = [
    {
        type: "list",
        message: "Add team member",
        name: "addMember",
        choices: ["Engineer", "Intern", "Team complete"],
    },
];

const engineerQuestions = [
    {
        type: "input",
        message: "Enter engineer's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter employee ID",
        name: "employeeID",
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email",
        emailValidation: true,
    },
    {
        type: "input",
        message: "Enter GitHub username",
        name: "gitHub",
    },
];

const internQuestions = [
    {
        type: "input",
        message: "Enter intern's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter employee ID",
        name: "employeeID",
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email",
        emailValidation: true,
    },
    {
        type: "input",
        message: "Enter school",
        name: "school",
    },
]
managerQuestions.forEach(el => el.validate = validateInput.bind(el));
engineerQuestions.forEach(el => el.validate = validateInput.bind(el));
internQuestions.forEach(el => el.validate = validateInput.bind(el));

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addMemberQuestion,
}