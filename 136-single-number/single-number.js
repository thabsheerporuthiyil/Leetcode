/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let val of nums){
        if(nums.indexOf(val)===nums.lastIndexOf(val)){
            return val;
        }
    }
};