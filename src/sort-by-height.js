const { NotImplementedError } = require('../extensions/index.js');

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
  const newArr = [].concat(arr);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== -1) {
      for (let j = 0; j < newArr.length; j++) {
        if (newArr[j] !== -1) {
          if (newArr[i] < newArr[j]) {
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
          }
        }
      }
    }
  }

  return newArr;
}

module.exports = {
  sortByHeight
};
