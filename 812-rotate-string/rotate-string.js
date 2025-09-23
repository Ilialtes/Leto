/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s === goal) return true
    if(s.length !== goal.length) return false
    if(s.length === 0 && goal.length === 0 ) return false
    s = s + s
    if(s.includes(goal)) {
        return true
    }
    return false
}