const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {


  let Newarr = [];
  for (let i of names) {
    if (Newarr.includes(i)) {
      for (let n = 1; n < 100; n++) {
        if (!(Newarr.includes(`${i}(${n})`))) {
          Newarr.push(`${i}(${n})`);
          break;
        }
      }
    } else {
      Newarr.push(i);
    }
  }
  return Newarr;

}

module.exports = {
  renameFiles
};
