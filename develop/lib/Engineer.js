const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, pid, github) {
        super(name, email, pid);
        this.github = github;
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;