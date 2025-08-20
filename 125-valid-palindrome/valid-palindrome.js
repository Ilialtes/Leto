/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length <= 1) return true

    cleanedS = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    console.log(cleanedS)
    console.log(s.length)
    let left = 0
    let right = cleanedS.length -1
    while(left < right) {
        if(cleanedS[left] !== cleanedS[right]){
            return false
        }
        left++
        right--
    }
    return true
};