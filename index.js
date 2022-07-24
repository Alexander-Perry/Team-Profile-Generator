// .
// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json 

// Includes
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const { clear, Console } = require('console');
const colourize = '\x1b[33m%s\x1b[0m';

const employees = [];

function addEmployee() {
    inquirer.prompt(Employee.questions)
        .then((data) => {
            switch (data.employeeType) {
                case 'Engineer': //
                clear();
                    addEngineer();
                    break;
                case 'Intern':
                    clear();
                    addIntern();
                    break;
                case 'Finished':
                    console.log('Finished');
                    //generate HTML
                    break;
                default:
                    console.log('Default');
                    //generate HTML
                    break;
            };
        });
};

// addManager function - name, id, email, officeNumber
function addManager() {
    console.log(colourize, '\n Add a Manager: ');
    inquirer.prompt(Manager.questions)
        .then((data) => {
            const { name, id, email, officeNumber } = data;
            const manager = new Manager(name, id, email, officeNumber);
            employees.push(manager);
            clear();
            console.log(colourize, `
            ${manager.getRole()} Added
            Name: ${name}
            ID: ${id}
            email: ${email}
            Office Number: ${officeNumber}            
            `);
            addEmployee();
        });
};

// addEngineer function - name, id, email, github
function addEngineer() {
    console.log(colourize, '\n Add an Engineer: ');
    inquirer.prompt(Engineer.questions)
        .then((data) => {
            const { name, id, email, github } = data;
            const engineer = new Engineer(name, id, email, github);
            employees.push(engineer);
            clear();
            console.log(colourize, `
            ${engineer.getRole()} Added
            Name: ${name}
            ID: ${id}
            email: ${email}
            GitHub: ${github}            
            `);

            addEmployee();
        });
};

// addIntern function - name, id, email, school
function addIntern() {
    console.log(colourize, '\n Add an Intern: ');
    inquirer.prompt(Intern.questions)
        .then((data) => {
            const { name, id, email, school } = data;
            const intern = new Intern(name, id, email, school);
            employees.push(intern);
            clear();
            console.log(colourize, `
            ${intern.getRole()} Added
            Name: ${name}
            ID: ${id}
            email: ${email}
            School: ${school}            
            `);
            addEmployee();
        });
};

// Initialise with the addManager function
addManager();

// AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
