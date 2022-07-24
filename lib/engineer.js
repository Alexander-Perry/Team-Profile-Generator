const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub() {
        return this.github
    };
    getRole() {
        return 'Engineer'; 
    };
};

// Engineer Questions 
const questions = [
    { // Engineer Name
        type: 'input',
        name: 'name',
        message: "Engineer name: ",
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
        message: "Engineer ID: ",
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
        message: "Engineer's email: ",
        validate: (input) => {
            if (input) return true;
            else {
                console.log("email required");
                return false;
            };
        }

    },
    { // Engineer's gitHub
        type: 'input',
        name: 'github',
        message: "Engineer's gitHub: ",
        validate: (input) => {
            if (input) return true;
            else {
                console.log("github required");
                return false;
            };
        }
    }
];

module.exports = Engineer;
module.exports.questions = questions;