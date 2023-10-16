const capitalize = require('./capitalize');

test('capitalizes first letter of the word: string', () => {
  const result = capitalize('string');
  expect(result).toMatch(/^[A-Z][a-z]*$/);
});
