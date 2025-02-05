const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rowCount = matrix.length;
  const columnCount = matrix[0].length;
  const res = Array.from({ length: rowCount }, () =>
    Array(columnCount).fill(0)
  );

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < columnCount; col++) {
      if (matrix[row][col]) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (
              row + i >= 0 &&
              row + i < rowCount &&
              col + j >= 0 &&
              col + j < columnCount
            ) {
              if (i !== 0 || j !== 0) {
                res[row + i][col + j]++;
              }
            }
          }
        }
      }
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
