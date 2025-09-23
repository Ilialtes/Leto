/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s === goal) return true
    if(s.length !== goal.length) return false
    if(s.length === 0 && goal.length === 0 ) return false
    sArray = s.split('')
    for(let i = 0; i < s.length; i++) {
        temp = sArray.shift()
        sArray.push(temp)
        if(sArray.join('') === goal) {
            return true
        }
    }
    return false 
}