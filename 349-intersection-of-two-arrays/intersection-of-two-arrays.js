/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = nums1.filter(item => nums2.includes(item))
    return [...new Set(result)];
};