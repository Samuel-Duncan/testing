const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('divides 4 / 2 to equal 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('multiplies 2 * 4 to equal 8', () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});
