class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
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
        return 'Employee';
    }
};

const questions = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Select next employee to add: ',
        choices: ['Engineer', 'Intern', 'Finished']
    }
]


module.exports = Employee;
module.exports.questions = questions;
