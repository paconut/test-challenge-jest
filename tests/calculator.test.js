const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
})

test('substracts 2 - 1 to be 1', () => {
    expect(calculator.substract(2, 1)).toBe(1);
})

test('multiplies 2 * 1 to be 2', () => {
    expect(calculator.multiply(2, 1)).toBe(2);
})

test('divides 7 / 2 to be 3.5', () => {
    expect(calculator.divide(7, 2)).toBe(3.5);
})

test('Raises to power 2 ^ 3 to be 8', () => {
    expect(calculator.power(2, 3)).toBe(8);

})

