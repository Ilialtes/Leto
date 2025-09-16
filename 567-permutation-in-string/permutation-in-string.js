/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) {
        return false
    }

    s1Map = Array(26).fill(0)
    s2Map = Array(26).fill(0)
    let aCharCode = 'a'.charCodeAt(0)
    for(let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - aCharCode]++
        s2Map[s2.charCodeAt(i) - aCharCode]++
    }
    if(s1Map.toString() === s2Map.toString()) {
        return true
    }
    for(let i = s1.length; i < s2.length; i++){
        s2Map[s2.charCodeAt(i) - aCharCode]++
        s2Map[s2.charCodeAt(i - s1.length) - aCharCode]--
        if (s1Map.toString() === s2Map.toString()) {
            return true;
        }
    }
    return false
}


