const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(machineIsDirect = true) {
    this.machineIsDirect = machineIsDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let mesUp = message.toUpperCase();
    let result = '';
    let letter='';
    let encryptKey = '';
    
    let num = 0;

    for (let i = 0; i < message.length; i++) {

      if (mesUp.charCodeAt(i) > 64 && mesUp.charCodeAt(i) < 91) {
        encryptKey += key[num % key.length].toUpperCase();
        num+=1;

      } else {
        encryptKey += ' ';
      }

    }


    for (let i = 0; i < message.length; i++) {
      if (mesUp.charCodeAt(i) > 64 && mesUp.charCodeAt(i) < 91) {
        letter = String.fromCharCode(((mesUp.charCodeAt(i) - 65) + (encryptKey.charCodeAt(i) - 65)) % 26 + 65);
        result += letter;
      } else {
        result += message[i];
      }
    }

    if(!this.machineIsDirect) result = result.split('').reverse().join('')

    return result
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let encryptedMesUp = message.toUpperCase();
    let result = '';
    let letter='';
    let encryptKey = '';

    let num = 0;

    for (let i = 0; i < encryptedMesUp.length; i++) {
      if (encryptedMesUp.charCodeAt(i) > 64 && encryptedMesUp.charCodeAt(i) < 91) {
        encryptKey += key[num % key.length].toUpperCase();
        num+=1;
      } else {
        encryptKey += ' ';
      }
    }

    for (let i = 0; i < encryptedMesUp.length; i++) {
      if (encryptedMesUp.charCodeAt(i) >= 65 && encryptedMesUp.charCodeAt(i) <= 90) {
        letter = String.fromCharCode(((encryptedMesUp.charCodeAt(i) - 65) - (encryptKey.charCodeAt(i) - 65) + 26) % 26 + 65);
        result += letter;
      } else {
        result += message[i];
      }
    }

    if(!this.machineIsDirect) result = result.split('').reverse().join('')

    return result

  }
}

module.exports = {
  VigenereCipheringMachine
};
