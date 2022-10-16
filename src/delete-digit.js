const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let minNum = 0;
  let arr = n.toString().split('');
  arr.forEach(el => {
    if (el > minNum){
      minNum = el;
    }
  })
  let index = arr.lastIndexOf(minNum);
  arr.splice(index-1,1).join('');
  return Number(arr.join(''));

}

module.exports = {
  deleteDigit
};
