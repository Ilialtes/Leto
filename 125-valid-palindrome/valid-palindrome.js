/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    console.log(s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') === s)
    return (s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') === s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join(''))
};