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
 function repeater(str, options ={ repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|' }) {
  let initObj = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|' };
  options.__proto__ = initObj;
  
  let newStr = [];
  let newAdd = [];
  for(let i = 0;i<options.additionRepeatTimes;i++) newAdd[i]=''+options.addition;
  let newAddStr = newAdd.join(options.additionSeparator+'');
  for(let i = 0;i<options.repeatTimes;i++) newStr[i]=''+str+newAddStr;
  let newStrStr = newStr.join(options.separator+'');

  return newStrStr;
}

module.exports = {
  repeater
};
