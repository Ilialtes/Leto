/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagramGroups = {}

    for(str of strs){
        let charCount = Array(26).fill(0)
        for(char of str) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
            charCount[index]++
        } 
        if(!anagramGroups[charCount]){
            anagramGroups[charCount] = []
        }
        anagramGroups[charCount].push(str)
    }
    return Object.values(anagramGroups)
}
