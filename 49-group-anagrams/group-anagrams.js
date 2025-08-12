
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const wordKeys = {}

    if (strs.length === 1) return [[...strs]]

    for (str of strs) {
    const charCount = Array(26).fill(0)
        for(char of str) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
            charCount[index]++
        }
        
        if (!wordKeys[charCount]) {
            wordKeys[charCount] = []
        }
        wordKeys[charCount].push(str)
    }
    return Object.values(wordKeys)
};