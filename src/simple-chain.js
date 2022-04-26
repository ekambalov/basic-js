const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value ) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
      if(!Number.isInteger(position)||position>=this.chain.length||position<= 0) {
        this.chain = [];
        throw new Error("You can't remove incorrect link!")
      };
      this.chain.splice(position-1,1);
      return this;
    
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
      let finalChain = ''
      for (let i =0; i<this.chain.length;i++){
          if(this.chain[i]!==undefined) finalChain += `( ${this.chain[i]} )~~`;
          if(this.chain[i]===undefined) finalChain += `( )~~`;            
      }
      finalChain = finalChain.slice(0,finalChain.length-2);        
      this.chain = [];
    return finalChain;
  }
};

module.exports = {
  chainMaker
};
