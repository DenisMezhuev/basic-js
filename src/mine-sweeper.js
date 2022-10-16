const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = [];
  for (let i = 0; i < matrix.length + 2; i++) {
      arr.push([]);
      for (let n = 0; n < matrix[0].length + 2; n++) {
          arr[i].push(0);
      }
  }

  console.log(arr);

  for (let i = 0; i < matrix.length; i++) {
      for (let n = 0; n < matrix[0].length; n++) {
          if (matrix[i][n]) {
               arr[i][n] += 1;
               arr[i+1][n] += 1;
               arr[i][n+1] += 1;
               arr[i+2][n] += 1;
               arr[i][n+2] += 1;
               arr[i+2][n+2] += 1;
               arr[i+1][n+2] += 1;
               arr[i+2][n+1] += 1;
          }
      }
  }
  console.log(arr);

  let fArr = [];
  for (let i = 1; i < matrix.length+1; i++) {
      fArr.push([]);
      for (let n = 1; n < matrix[0].length+1; n++) {
          fArr[i-1].push(arr[i][n]);
      }
  }
  return fArr;


}
module.exports = {
  minesweeper
};
