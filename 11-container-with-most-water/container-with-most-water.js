/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0 
    p1 = 0
    p2 = height.length-1
    while(p1 < p2) {
        minHeight =  Math.min(height[p1], height[p2])
        distance = p2 - p1 
        area = minHeight * distance
        maxArea = Math.max(maxArea, area)
        if(height[p1] <= height[p2]) {
            p1++
        } else {
            p2--
        }
    
    }
    return maxArea
};