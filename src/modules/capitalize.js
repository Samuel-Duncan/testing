const capitalize = (string) => {
  const firstLetter = string[0];
  const restOfLetters = string.slice(1);
  const result = firstLetter.toUpperCase().concat(restOfLetters);

  return result;
};
module.exports = capitalize;
