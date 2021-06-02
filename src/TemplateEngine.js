const fs = require("fs");

class TemplateEngine {
    constructor(filename) {
        this.content = fs.readFileSync(filename, "utf-8");
    };

    setData(data) {

        for (const [key, value] of Object.entries(data)) {
            const regex = new RegExp(`\{\{${key}\}\}`, "g");
            this.content = this.content.replace(regex, value);
        }
    };

    getHTML() {
        return this.content;
    }
}

module.exports = TemplateEngine;