/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsMap = {}

    for(num of nums) {
        if(numsMap[num]) {
            return true
        }
        numsMap[num] = 1
    } 
    return false
};