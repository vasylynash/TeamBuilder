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

const addMemeberQuestion = [
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
        // when: (answers) => answers.addMemeber === "Engineer"
    },
    {
        type: "input",
        message: "Enter employee ID",
        name: "employeeID",
        // when: (answers) => answers.addMemeber === "Engineer"
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email",
        emailValidation: true,
        // when: (answers) => answers.addMemeber === "Engineer"
    },
    {
        type: "input",
        message: "Enter GitHub username",
        name: "gitHub",
        // when: (answers) => answers.addMemeber === "Engineer"
    },
];

const internQuestions = [
    {
        type: "input",
        message: "Enter intern's name",
        name: "name",
        // when: (answers) => answers.addMemeber === "Intern"
    },
    {
        type: "input",
        message: "Enter employee ID",
        name: "employeeID",
        // when: (answers) => answers.addMemeber === "Intern"
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email",
        emailValidation: true,
        // when: (answers) => answers.addMemeber === "Intern"
    },
    {
        type: "input",
        message: "Enter school",
        name: "school",
        // when: (answers) => answers.addMemeber === "Intern"
    },
]

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addMemeberQuestion,
}