/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let cordinates = []
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                cordinates.push({ x: i, y: j });
            }
        }
    }
    for(cordinate of cordinates) {
        fillCol(cordinate, matrix)
        fillRow(cordinate, matrix)
    }
};

let fillCol = (cordinate, matrix) => {  
    let numRows = matrix.length;
    for(let i = 0; i < numRows; i++) {
        matrix[i][cordinate.y] = 0
    }
}

let fillRow = (cordinate,matrix) => {
    let numCols = matrix[0].length;
    for(let i = 0; i < numCols; i++) {
        matrix[cordinate.x][i] = 0
    }
}
