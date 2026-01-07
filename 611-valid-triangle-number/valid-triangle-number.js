/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b) => a-b)
    let count = 0

    for(let i = nums.length-1; i >=2; i--) {
        let left = 0
        let rigth = i - 1

        while(left < rigth) {
            if(nums[left] + nums[rigth] > nums[i]) {
                count+= rigth - left
                rigth--
            }else {
                left++ 
            }
        }
       
    }
     return count
};