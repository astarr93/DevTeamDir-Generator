const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, pid, email, officeNumber) {
        super(name, pid, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;