/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map()
    let max = 0
    let maxKey = 0
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    map.forEach((values, keys) => {
        if (values > max) {
            max = values
            maxKey = keys
        }
    })
    return maxKey
};