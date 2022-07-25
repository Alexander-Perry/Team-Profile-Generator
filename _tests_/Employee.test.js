const Employee = require('../lib/employee');

// Create Employee
// name, id, email
describe('Create an Employee', () => {
    it('Should create an employee named Bob, ID number 1 and email bob@test.com', () => {
        const employee = new Employee('Bob', 1, 'bob@test.com');
        expect(employee.name).toEqual('Bob');
    });
});
