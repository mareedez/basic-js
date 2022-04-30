const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let counter = 1
    let letter = str[i]
    while (str[i + 1] === letter[0]) {
      i += 1
      counter += 1
    }
    if(counter > 1){
      result += counter
    }
    result += letter
  }
  return result;
}

module.exports = {
  encodeLine
};
