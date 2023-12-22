const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = arr.filter((height) => height > 0);
  sortArr.sort((a, b) => a - b);
  let i = 0;
  let res = arr.map((height) => {
    if (height > 0) {
      height = sortArr[i];
      i += 1;
    }
    return height;
  });
  return res;
}

module.exports = {
  sortByHeight,
};
