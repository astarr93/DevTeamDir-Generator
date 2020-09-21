const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, pid, officeNumber) {
        super(name, email, pid);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;