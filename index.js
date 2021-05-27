const TemplateEngine = require("./src/TemplateEngine");
const fs = require("fs");

// let manager = new TemplateEngine("./src/manager.html");
// manager.setData({ name: "john", email: "John@gmail.com", officeNumber: 101 });
// let managerHTML = manager.getHTML();

let engineer = new TemplateEngine("./src/engineer.html");
engineer.setData({ name: "jane", employeeID: 101, email: "Jane@gmail.com", gitHub: "john" });
let engineerHTML = engineer.getHTML();

let engineer1 = new TemplateEngine("./src/engineer.html");
engineer1.setData({ name: "jane", employeeID: 101, email: "Jane@gmail.com", gitHub: "john" });
let engineerHTML1 = engineer1.getHTML();

let template1 = new TemplateEngine("./src/index.html");
template1.setData({ employees: engineerHTML + engineerHTML1 });
let result = template1.getHTML();

fs.writeFileSync("./dist/index.html", result);
fs.copyFileSync("./src/style.css", "./dist/style.css");

console.log(result);
