const Employee = require("./Employee");

class SeniorEngineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Senior Engineer";
    }

}

module.exports = SeniorEngineer;