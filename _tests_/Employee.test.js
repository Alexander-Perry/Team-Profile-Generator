const Employee = require('../lib/employee');

// Create Employee
// name, id, email
describe('Create an Employee', () => {
    it('Should create an employee named Sam, ID number 54 and email sam@test.com', () => {
        const employee = new Employee('Sam', 54, 'sam@test.com');
        expect(employee).toEqual({
            'name': 'Sam',
            'id': 54,
            'email': 'sam@test.com',
        });
    });
});

// Employee - getName()
describe('Create an Employee and run getName()', () => {
    it('employee.getName() should equal Sam ', () => {
        const employee = new Employee('Sam', 54, 'sam@test.com');
        expect(employee.getName()).toEqual('Sam');
    });
});

// Employee - getId()
describe('Create an Employee and run getId()', () => {
    it('employee.getId() should equal 54 ', () => {
        const employee = new Employee('Sam', 54, 'sam@test.com');
        expect(employee.getId()).toEqual(54);
    });
});

// Employee - getEmail
describe('Create an Employee and run getEmail()', () => {
    it('employee.getEmail() should equal sam@test.com ', () => {
        const employee = new Employee('Sam', 54, 'sam@test.com');
        expect(employee.getEmail()).toEqual('sam@test.com');
    });
});

// Employee - getRole()
describe('Create an Employee and run getRole()', () => {
    it('employee.getRole() should equal Employee ', () => {
        const employee = new Employee('Sam', 54, 'sam@test.com');
        expect(employee.getRole()).toEqual('Employee');
    });
});
