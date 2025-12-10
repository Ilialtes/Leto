/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const uniqueNumbers = new Set(nums)

    if(uniqueNumbers.has(0)) {
        uniqueNumbers.delete(0)
    }
    return uniqueNumbers.size
};