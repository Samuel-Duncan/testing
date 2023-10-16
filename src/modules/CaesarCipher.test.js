const CaesarCipher = require('./CaesarCipher');

test('expect (save yourself!, 3) to equal vdyh brxuvhoi!', () => {
  expect(CaesarCipher.addWithWrap('save yourself!', 3)).toMatch(
    'vdyh brxuvhoi!',
  );
});
