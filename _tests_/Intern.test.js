const Intern = require('../lib/intern');

// Create Intern
// name, id, email, school
describe('Create an Intern', () => {
    it('Should create an Intern named Bob, ID number 1, email bob@test.com and School: MySchool', () => {
        const intern = new Intern('Steve', 2, 'steve@test.com', 'MySchool');
        expect(intern).toEqual({
            'name': 'Steve',
            'id': 2,
            'email': 'steve@test.com',
            'school': 'MySchool'
        });
    });
});

// Create an Intern and getRole()
describe('Create an Intern and getRole()', () => {
    it('Should Create an Intern, and getRole() should equal Intern', () => {
        const intern = new Intern('Steve', 2, 'steve@test.com', 'MySchool');
        expect(intern.getRole()).toEqual('Intern');
    });
});

// Create an Intern and getSchool()
describe('Create an Intern and getSchool()', () => {
    it('Should Create an Intern, and getSchool() should equal MySchool', () => {
        const intern = new Intern('Steve', 2, 'steve@test.com', 'MySchool');
        expect(intern.getSchool()).toEqual('MySchool');
    });
});