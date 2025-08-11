/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false 
    let sMap = createMap(s)
    for(char of t) {
        if(!sMap[char]) {
            return false
        }
        sMap[char]--
    }
    return true
}

function createMap(y) {
    let inMap = {}
    for(char of y) {
        inMap[char] = inMap[char] + 1 || 1
    }
    return inMap
}