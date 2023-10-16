class CaesarCipher {
  static isLetter(character) {
    return /^[a-zA-Z]$/.test(character);
  }

  static addWithWrap(string, shift) {
    const scrambledArray = [];

    for (let i = 0; i < string.length; i++) {
      if (CaesarCipher.isLetter(string[i])) {
        let charCode = string[i].charCodeAt(0);
        const isUppercase = charCode >= 65 && charCode <= 90;
        const isLowercase = charCode >= 97 && charCode <= 122;

        if (isUppercase || isLowercase) {
          charCode += shift;
          if (
            (isUppercase && charCode > 90) ||
            (isLowercase && charCode > 122)
          ) {
            charCode -= 26;
          }
        }

        scrambledArray.push(String.fromCharCode(charCode));
      } else {
        scrambledArray.push(string[i]);
      }
    }

    return scrambledArray.join('');
  }
}
module.exports = CaesarCipher;
