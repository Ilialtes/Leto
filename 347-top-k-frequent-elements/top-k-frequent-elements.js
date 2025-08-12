/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
     const topK = {}
        if(nums.length === 1) {return [...nums]}
        for(let num of nums) {
            if(!topK[num]) {
                topK[num] = 0
            }
            topK[num]++
        }
        const tops = Object.entries(topK).sort((a,b) => b[1] - a[1]).slice(0,k).map(pair => Number(pair[0]))
       return tops
};