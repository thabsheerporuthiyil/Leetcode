/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum=0;
    for(let i=0;i<nums.length;i++){
        elementSum+=nums[i];
    }
    let digitSum=nums.join('').split('').reduce((a,b)=>a+Number(b),0)
    return Math.abs(elementSum-digitSum)
};