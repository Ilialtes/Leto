/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let rigth = height.length -1
    
    while(left < rigth) {
        const min = Math.min(height[left], height[rigth]);
        currentArea = min * (rigth-left)

        maxArea = Math.max(maxArea, currentArea)

        if(height[left] < height[rigth]) {
            left++
        }else {
            rigth--
        }
    }
    return maxArea
};