/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
   let n = matrix.length
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for(let i = 0; i < n; i++) {
        let left = 0
        let rigth = n-1

        while(left < rigth) {
            let temp = matrix[i][left]
            matrix[i][left] = matrix[i][rigth]
            matrix[i][rigth] = temp

            left++
            rigth--
        } 
    }
};


