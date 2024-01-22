const { default: expect } = require('expect');

const div35 = require('../fizzBuzz');

test('de 15 se espera FizzBuzz', () => {
    expect(div35(15)).toBe('FizzBuzz');
})
