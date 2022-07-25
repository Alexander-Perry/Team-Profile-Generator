const Engineer = require('../lib/engineer');

// Create Engineer
// name, id, email, github
describe('Create an Intern', () => {
    it('Should create an Engineer named Kelly, ID number 3, email Kelly@test.com and github: KellyGH', () => {
        const engineer = new Engineer('Kelly', 3, 'Kelly@test.com', 'KellyGH');
        expect(engineer).toEqual({
            'name': 'Kelly',
            'id': 3,
            'email': 'Kelly@test.com',
            'github': 'KellyGH'
        });
    });
});

// Create an Engineer and getRole()
describe('Create an Engineer and getRole()', () => {
    it('Should Create an Engineer, and getRole() should equal Engineer', () => {
        const engineer = new Engineer('Kelly', 3, 'Kelly@test.com', 'KellyGH');
        expect(engineer.getRole()).toEqual('Engineer');
    });
});

// Create an Engineer and getGithub()
describe('Create an Engineer and getGithub()', () => {
    it('Should Create an Engineer, and getGithub() should equal KellyGH', () => {
        const engineer = new Engineer('Kelly', 3, 'Kelly@test.com', 'KellyGH');
        expect(engineer.getGithub()).toEqual('KellyGH');
    });
});