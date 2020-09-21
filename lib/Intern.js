const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, pid, school) {
        super(name, email, pid);
        this.school = school;
    };

    getRole() {
        return "Intern";
    };

    getSchool() {
        return this.school;
    };
}

module.exports = Intern;