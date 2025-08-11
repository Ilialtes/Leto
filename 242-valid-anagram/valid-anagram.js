/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false 
    let sMap = createMap(s)
    let tMap = createMap(t)
    console.log(sMap)
    console.log(tMap)
    
    for(char in sMap) {
        if(sMap[char] !== tMap[char]){
            return false
        } 
    }
    return true
   //return s.split('').sort().join('') === t.split('').sort().join('')
};

function createMap(y) {
    let inMap = {}
    for(char of y) {
        inMap[char] = inMap[char] + 1 || 1
    }
    return inMap
}