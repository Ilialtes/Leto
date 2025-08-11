/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = {}; // Use an object as a hash map

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement exists in our map
        if (seen[complement] !== undefined) {
            // If it exists, we found our pair
            return [seen[complement], i];
        }

        // If we haven't found a pair, store the current number and its index
        seen[currentNum] = i;
    }
};