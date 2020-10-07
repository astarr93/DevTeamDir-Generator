class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        // Personnel Indentification Number. Must be Unique!
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
};

module.exports = Employee;