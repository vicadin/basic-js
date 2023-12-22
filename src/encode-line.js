const { NotImplementedError } = require("../extensions/index.js");

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
  let arr = str.split("");
  let res = "";
  let repeat = 1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i + 1]) {
      repeat += 1;
    } else {
      if (repeat > 1) {
        res += repeat;
      }
      res += arr[i];
      repeat = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
