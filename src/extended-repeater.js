const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator
  let string = String(str);
  let result = [];
  let repeat = [];

  repeatTimes = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
  separator = options.hasOwnProperty("separator") ? options.separator + "" : "+";
  addition = options.hasOwnProperty("addition") ? options.addition + "" : "";
  additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
  additionSeparator = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : "|";

  for (let i = 0; i < additionRepeatTimes; i++) {
      repeat.push(addition);
    }
    repeat = repeat.join(additionSeparator);
    for (let i = 0; i < repeatTimes; i++) {
      result.push(string + repeat);
    }
    return result.join(separator);
  }

module.exports = {
  repeater
};
