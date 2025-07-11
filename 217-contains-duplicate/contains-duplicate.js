/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    seenNumbers = {}
    for(num of nums){
       if(seenNumbers[num]) {
        return true
       }
       seenNumbers[num] = true
    }  
    return false
};