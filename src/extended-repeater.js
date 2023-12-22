const { NotImplementedError } = require("../extensions/index.js");

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
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;
  let res = "";

  for (let i = 0; i < repeatTimes; i += 1) {
    res =
      (
        str +
        (addition + additionSeparator).repeat(additionRepeatTimes - 1) +
        addition +
        separator
      ).repeat(repeatTimes - 1) +
      str +
      (addition + additionSeparator).repeat(additionRepeatTimes - 1) +
      addition;
  }
  return res;
}

module.exports = {
  repeater,
};
