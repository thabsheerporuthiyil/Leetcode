/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false;
    let sqrt=Math.log2(n)
    return sqrt===parseInt(sqrt)
};