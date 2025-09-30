/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = {}
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log(complement)
        if(seen[complement] !== undefined) {
            return [seen[complement], i]
        }
        seen[nums[i]] = i
    }
};