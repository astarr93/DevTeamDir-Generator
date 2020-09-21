const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, pid, email, school){
        super(name, pid, email);
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