/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array(9).fill(0).map(() => new Set())  
    let cols = Array(9).fill(0).map(() => new Set())  
    let boxes = Array(9).fill(0).map(() => new Set())  

    for(let i = 0; i< 9; i++) {
        for(let j = 0; j < 9; j++) {
            let num = board[i][j]

            if(board[i][j] === '.'){
                continue
            }
            let boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)

            if(rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false
            }
            rows[i].add(num)
            cols[j].add(num)
            boxes[boxIndex].add(num)
        }
    }
    return true 
};