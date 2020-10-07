const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, pid, officeNumber) {
        super(name, email, pid);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;