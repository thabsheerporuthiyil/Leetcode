/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result=0;
    for(let val of nums){
        result ^= val;
    }
    return result;
    };
    