/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleSum=0;
    let doubleSum=0;

    for(let val of nums){
        if(val<10){
            singleSum+=val;
        }
        else{
            doubleSum+=val;
        }
    }
    return singleSum!==doubleSum;
};