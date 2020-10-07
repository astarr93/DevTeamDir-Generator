class Employee {
    constructor(name, email, pid, role) {
        this.name = name;
        this.email = email;
        // Personnel Indentification Number. Must be Unique!
        this.pid = pid;
        this.role = role;
    };

    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.pid;
    }
    getRole() {
        return this.role;
    }
};

module.exports = Employee;