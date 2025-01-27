/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longestWord = ''
    let longestWordLength = 0

    for(let i = 0; i < s.length; i++){
      char = s[i];
      if(longestWord.includes(char)) {
        longestWord = longestWord.slice(longestWord.indexOf(char)+ 1)
        //longestWord = longestWord.slice(longestWord.indexOf(char) + 1);

      }

      longestWord += char;

      if(longestWord.length > longestWordLength) {
        longestWordLength = longestWord.length
      }
    }
    return longestWordLength
};