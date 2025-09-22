/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let cordinates = []
    let numRows = matrix.length;
    let numCols = matrix[0].length;

    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < numCols; j++){
            if (matrix[i][j] === 0) cordinates.push({x:i,y:j})
        }
    }
    console.log(cordinates)
    for(const cordinate of cordinates) {
        for(let i = 0; i < numRows; i++) {
            matrix[i][cordinate.y] = 0 
        } 
        for(let j = 0; j < numCols; j++) {
            matrix[cordinate.x][j] = 0 
        }
    }
}
