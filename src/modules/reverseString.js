const reverseString = (string) => {
  const letters = string.split('');
  letters.reverse();

  const result = letters.join('');
  return result;
};
module.exports = reverseString;
