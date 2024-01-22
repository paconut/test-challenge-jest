// You already have the methods imported
const { default: expect } = require('expect');
const { getUser, getUsers } = require('../users');


// Make a test to verify if the method getUser(id) works correctly
describe('User functions tests', () => {
    it('Should get the user by its id', () => {
        const user = getUser(1);
        expect(user).toEqual({
            id: 1,
            username: 'hpLover4',
            email: 'sirious90@gmail.com',
            password: 'hArrydotCom'
        });
    });
});
// Verify any data of the resulting object you want

// READ documentation