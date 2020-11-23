// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(employee) {
        return this.name;
    };

    getId(employee) {
        return this.id;
    };

    getEmail(employee) {
        return this.email;
    }

    getRole(employee) {
        return "Employee";
    }
};

module.exports = Employee;