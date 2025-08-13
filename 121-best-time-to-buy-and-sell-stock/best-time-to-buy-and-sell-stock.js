/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let max = 0 //= Math.max(prices)
      if (!prices || prices.length === 0) {
        return 0;
    }
    for(price of prices) {
      if(price < min) {
        min = price
      }
      if(price - min > max) {
        max = price - min
      }
    }
    return max
};