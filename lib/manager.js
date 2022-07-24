const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return 'Manager';
    };
};


// Manager Questions 
const questions = [
    { // Manager's Name
        type: 'input',
        name: 'name',
        message: "Manager's name: ",
        validate: (input) => {
            if (input) return true
            else {
                console.log("Name Required");
                return false;
            };
        }
    },
    { // Manager's ID
        type: 'input',
        name: 'id',
        message: "Manager's ID: ",
        validate: (input) => {
            if (input) return true;
            else {
                console.log('ID Required');
                return false;
            };
        }
    },
    { // Manager's email
        type: 'input',
        name: 'email',
        message: "Manager's email: ",
        validate: (input) => {
            if (input) return true;
            else {
                console.log("email required");
                return false;
            };
        }

    },
    { // Manager's officenumber
        type: 'input',
        name: 'officeNumber',
        message: "Manager's Office Number: ",
        validate: (input) => {
            if (input) return true;
            else {
                console.log("Office Number Required");
                return false;
            };
        }
    }
];


module.exports = Manager;
module.exports.questions = questions;
