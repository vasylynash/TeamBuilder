# TeamBuilder
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This is a simple CLI tool to generate team profile.

  ## Table of Contents
  [Installation](#installation)  
    [Usage](#usage)  
    [License](#license)  
    [Contributing](#contributing)  
    [Tests](#tests)  
    [Questions](#questions)  

  ## Installation
  Run ```npm install``` to install the dependencies.

  ## Usage
  [Demo video](https://drive.google.com/file/d/1OK2ptLiH6tpVaypm7lrIafWl0XKMV9gw/view)   
  Run ```node index.js``` to run the app.  
  You will get a series of questions about the team. First, enter the manager's info, and select an option to add either an engineer or an intern. Repeat as many times as you need. The **index.html** file along with the **style.css** will appear in the **dist** folder.

  ## Contributing
  Free to contribute

  ## License
  This project is licensed under the terms of the [MIT](https://opensource.org/licenses/MIT) license.

  ## Tests
  Use **jest** to add tests.
  ```
  describe("Employee class", () => {
    it("should return correct name when getName() is called", () => {
        const employee = new Employee("Jane", 1, "jane@gmail.com");
        expect(employee.getName()).toEqual("Jane");
    });
  });
  ```

  ## Questions
  https://github.com/vasylynash  
  For questions and suggestions, contact me at vasylyna.shevadutska@gmail.com.