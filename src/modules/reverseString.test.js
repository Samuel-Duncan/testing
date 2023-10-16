const reverseString = require('./reverseString');

test('expect string to be gnirts', () => {
  const result = reverseString('string');
  expect(result).toMatch('gnirts');
});
