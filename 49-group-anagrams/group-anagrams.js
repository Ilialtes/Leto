/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    wordKeys = {}

    if(strs.length === 1) return [[...strs]]
    
    for(str of strs) {
        key = str.split('').sort().join('')
        console.log(key)

        if(!wordKeys[key]) {
            wordKeys[key] = []
        }
        wordKeys[key].push(str)
    }
    return Object.values(wordKeys)
};