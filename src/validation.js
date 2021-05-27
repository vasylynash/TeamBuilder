const chalk = require('chalk');

function validateInput(input) {
    if (input === "") {
        console.log(chalk.red(`Please enter ${this.name}`));
        return false;
    }
    if (this.emailValidation) {
        const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(input);
        if (!isValid) {
            console.log(chalk.red(" Please enter a valid email"));
        }
        return isValid;
    }
    return true;
}

module.exports = validateInput;