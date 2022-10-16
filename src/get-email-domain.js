const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr=email.split('');
  let num = arr.lastIndexOf('@');
  return arr.slice(num+1).join('');
}

module.exports = {
  getEmailDomain
};
