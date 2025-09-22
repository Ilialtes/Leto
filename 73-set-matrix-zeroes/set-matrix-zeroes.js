/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let cordinates = []
    let numCol = matrix[0].length
    let numRow = matrix.length 
    
    for(let i = 0; i < numRow; i++ ) {
        for(let j = 0; j < numCol; j++){
            if(matrix[i][j]=== 0) {
                cordinates.push({x:i, y: j})
            }
        }
    }
    for(cordinate of cordinates) {
        for(let i = 0; i < numRow; i++) {
            matrix[i][cordinate.y] = 0
        }
        for(let j = 0; j < numCol; j++) {
            matrix[cordinate.x][j] = 0
        }
    }
}
