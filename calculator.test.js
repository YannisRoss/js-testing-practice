let calculator = require('./calculator.js')

test('adds 1 + 2', () => {

    expect(calculator.add(1,2)).toBe(3)
}) 


test('subtracts 1 - 2', () => {

    expect(calculator.subtract(1,2)).toBe(-1)
}) 


test('multiplies 4 x 9', () => {

    expect(calculator.multiply(4,9)).toBe(36)
}) 


test('divides 10/2', () => {

    expect(calculator.divide(10,2)).toBe(5)
}) 