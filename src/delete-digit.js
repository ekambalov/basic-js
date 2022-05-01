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

  let nStr = ''+n;
  let arr = [];
  let l = nStr.length-1
  for (let i = 0; i<=l; i++){
    arr[i]= +(nStr.slice(0,i) + nStr.slice(i+1))
  }
  arr.sort( (a,b) => a-b)
 return arr[l]
}

module.exports = {
  deleteDigit
};
