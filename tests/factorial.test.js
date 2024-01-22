const { default: expect } = require('expect');

const factorial = require('../factorial');

test('el factorial de 5 es 120', () => {
    expect(factorial(5)).toBe(120);
})
