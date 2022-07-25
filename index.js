//   -= Folder Structure =-
// ├── __tests__/                //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                    // rendered output (HTML)
// │   └── index.html           //(generated)
// ├── lib/                     // classes
// │   ├── employee.js
// │   ├── engineer.js
// │   ├── intern.js
// │   └── manager.js
// ├── src/                     // template helper code 
// │   └── template.js          
// ├── .gitignore               // indicates which folders and files Git should ignore
// ├── index.js                 // runs the application
// └── package.json 

// Includes
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const { clear, Console } = require('console');
const template = require('./src/template');
const colourize = '\x1b[33m%s\x1b[0m';
const employees = [];

// Add Employee function - check for employee type then trigger relevant function
// Pass to HTML functions when Finished.
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
                    clear()
                    for (const key in employees) {
                        console.log(colourize, `${employees[key].getRole()}: ${employees[key].getName()}`)
                    };
                    console.log('\nFinished');
                    //generate HTML
                    const htmlTemplate = template.generateHTML(employees);
                    writeHTML(htmlTemplate);
                    break;
            };
        });
};

// writeHTML function
function writeHTML(html) {
    fs.writeFile('./dist/index.html', html, (err) =>
        err ? console.log(err) : console.log(colourize, './dist/index.html generated'))
};

// addManager function - name, id, email, officeNumber
function addManager() {
    console.log(colourize, '\n Add a Manager: ');
    inquirer.prompt(Manager.questions)
        .then((data) => {
            const { name, id, email, officeNumber } = data;
            const manager = new Manager(name, id, email, officeNumber);
            clear();
            // console.log(manager);
            employees.push(manager);

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
            clear();
            // console.log(engineer);
            employees.push(engineer);

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
            clear();
            // console.log(intern);
            employees.push(intern);

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