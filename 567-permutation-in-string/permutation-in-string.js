/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) {
        return false
    }
    aCharCodeAt = 'a'.charCodeAt(0)
    let keyS1 = Array(26).fill(0)
    let keyS2 = Array(26).fill(0)

    for(let i = 0; i < s1.length; i++) {
        keyS1[s1.charCodeAt(i) - aCharCodeAt]++
        keyS2[s2.charCodeAt(i) - aCharCodeAt]++    
    }
    if (keyS1.toString() === keyS2.toString()) {
        return true;
    }
    for(let i = s1.length; i < s2.length; i++) {
        keyS2[s2.charCodeAt(i) - aCharCodeAt]++
        keyS2[s2.charCodeAt(i - s1.length) - aCharCodeAt]--
        if (keyS1.toString() === keyS2.toString()) {
            return true;
        }
    }
    return false
}


