// Requires Employee parent
const Employee = require('./employee');

// Intern class
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern'; 
    };
};

// Intern Questions
const questions = [
    { // Intern Name
        type: 'input',
        name: 'name',
        message: "Intern's name: ",
        validate: (input) => {
            if (input) return true
            else {
                console.log("Name Required");
                return false;
            };
        }
    },
    { // Intern's ID
        type: 'input',
        name: 'id',
        message: "Intern's ID: ",
        validate: (input) => {
            if (input) return true;
            else {
                console.log('ID Required');
                return false;
            };
        }
    },
    { // Intern's email
        type: 'input',
        name: 'email',
        message: "Intern's email: ",
        validate: (input) => {
            if (input) return true;
            else {
                console.log("email required");
                return false;
            };
        }

    },
    { // Intern's School
        type: 'input',
        name: 'school',
        message: "Intern's School: ",
        validate: (input) => {
            if (input) return true;
            else {
                console.log("School required");
                return false;
            };
        }
    }
];

module.exports = Intern;
module.exports.questions = questions;
