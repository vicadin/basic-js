const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--discard-next") {
      arr.splice(i + 1, 1);
      i += 1;
    } else if (arr[i] === "--discard-prev") res = res.slice(0, i - 1);
    else if (arr[i] === "--double-next") res.push(arr[i + 1]);
    else if (arr[i] === "--double-prev") res.push(arr[i - 1]);
    else res.push(arr[i]);
  }
  return res.filter((el) => el);
}

module.exports = {
  transform,
};
