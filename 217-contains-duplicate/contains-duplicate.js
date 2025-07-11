/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    newNums = {}
    for(num of nums){
        newNums[num] = newNums[num] + 1 || 1;
        if(newNums[num] == 2) {
            return true 
        }
        console.log(newNums[num])
    }  
    return false
};