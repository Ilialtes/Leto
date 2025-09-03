/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagramGroup= {}
        for(let str of strs) {
            let charCount = Array(26).fill(0)
            for(let char of str) {
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                charCount[index]++
            }
            let key = charCount.join('#')
            if(!anagramGroup[key]) {
                anagramGroup[key] = []
            }
            anagramGroup[key].push(str)
        }
        return Object.values(anagramGroup)
}
