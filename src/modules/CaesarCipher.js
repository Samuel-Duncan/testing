class CaesarCipher {
  static breakUpString(string) {
    return [...string];
  }

  static isLetter(character) {
    return /^[a-zA-Z]$/.test(character);
  }

  static addWithWrap(array, shift) {
    const scrambledArray = [];

    for (let i = 0; i < array.length; i++) {
      if (CaesarCipher.isLetter(array[i])) {
        let charCode = array[i].charCodeAt(0);
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
        scrambledArray.push(array[i]);
      }
    }

    return scrambledArray.join('');
  }
}
module.exports = CaesarCipher;
