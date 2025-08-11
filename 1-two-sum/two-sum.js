/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // FIX 1: Always declare your variables with const, let, or var.
    const seenComplement = {};

    for (let i = 0; i < nums.length; i++) {
        const thisNumber = nums[i];
        const complement = target - thisNumber;

        if (seenComplement[complement] !== undefined) {
            // FIX 2: You found the complement, so use it as the key to get its stored index.
            return [seenComplement[complement], i];
        }

        seenComplement[thisNumber] = i;
    }
};