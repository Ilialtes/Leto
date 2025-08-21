/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let j = 0
    let k = height.length -1
    while(j < k) {
        
        const min = Math.min(height[j], height[k])
        const currenArea = min * (k-j)

        maxArea = Math.max(maxArea, currenArea)

        if(height[j] < height[k]) {
            j++    
        }else {
            k--
        }
    }
    return maxArea
};