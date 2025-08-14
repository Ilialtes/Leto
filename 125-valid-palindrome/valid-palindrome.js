/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 0) return false

    return (s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') === s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join(''))
    
};