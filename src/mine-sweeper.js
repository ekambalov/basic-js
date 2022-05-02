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

  let newMatrix = [];
  for( let i = 0; i<matrix.length+2; i++){
    newMatrix[i]=[];
    for(let j = 0; j<matrix[0].length+2; j++){
      if(i==0||i==matrix.length+1||j==0||j==matrix[0].length+1) {
        newMatrix[i][j]=false;
      } else{
        newMatrix[i][j]=matrix[i-1][j-1];
      }
    }
  }
  let field = [];
  for (let i = 0; i < matrix.length; i++) {
    field[i]=[];    
  }

  for (let i = 1; i < newMatrix.length-1; i++) {
    for (let j = 1; j < newMatrix[i].length-1; j++) {
      let bNum=0;
      
         if(newMatrix[i-1][j-1]) bNum+=1;
         if(newMatrix[i-1][j] )bNum+=1;
         if(newMatrix[i-1][j+1])bNum+=1;
         if(newMatrix[i][j-1] )bNum+=1;
         if(newMatrix[i][j+1])bNum+=1;
         if(newMatrix[i+1][j-1]) bNum+=1;
         if(newMatrix[i+1][j])bNum+=1;
         if(newMatrix[i+1][j+1]) bNum+=1;

        field[i-1][j-1]=bNum;
    }
  }
return field
}

module.exports = {
  minesweeper
};
