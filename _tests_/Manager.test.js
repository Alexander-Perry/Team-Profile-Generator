const Manager = require('../lib/manager');

// Create Manager
// name, id, email, officeNumber
describe('Create a Manager', () => {
    it('Should create a Manager named Bob, ID number 1, email bob@test.com and officeNumber 1', () => {
        const manager = new Manager('Bob', 1, 'bob@test.com', 1);
        expect(manager).toEqual({
            'name': 'Bob',
            'id': 1,
            'email': 'bob@test.com',
            'officeNumber': 1
        });
    });
});

// Create a Manager and getRole()
describe('Create a manager and getRole()', () => {
    it('Should Create a manager, and getRole() should equal Manager', () => {
        const manager = new Manager('Bob', 1, 'bob@test.com', 1);
        expect(manager.getRole()).toEqual('Manager')
    });
});

// Create a Manager and getOfficeNumber()
describe('Create a manager and getName()', () => {
    it('Should Create a manager, and getOfficeNumber() should equal 1', () => {
        const manager = new Manager('Bob', 1, 'bob@test.com', 1);
        expect(manager.getOfficeNumber()).toEqual(1)
    });
});