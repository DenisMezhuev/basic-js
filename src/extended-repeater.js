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
  let string = String(str);
  let arr = [];

  if (options) {
   
   let sep = options.separator || '+';
   let additionRepT = options.additionRepeatTimes || 1;
   let repeatT = options.repeatTimes || 1;
   let additSepar = options.additionSeparator || '|';
   let addit = String(options.addition) || '';

   let str2 = string + ((String(options.addition) !== 'undefined' ? addit + additSepar : '')).repeat(additionRepT);
   if (String(options.addition) !== 'undefined') {
    str2 = str2.slice(0, str2.length - additSepar.length);
   }

   for (let i = 0; i < repeatT; i++) {
     arr.push(str2);
   }
   return arr.join(sep);
 }

}

module.exports = {
  repeater
};
