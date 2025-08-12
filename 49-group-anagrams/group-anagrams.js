
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
        const key = charCount.join('#')
        if (!wordKeys[key]) {
            wordKeys[key] = []
        }
        wordKeys[key].push(str)
    }
    return Object.values(wordKeys)
};