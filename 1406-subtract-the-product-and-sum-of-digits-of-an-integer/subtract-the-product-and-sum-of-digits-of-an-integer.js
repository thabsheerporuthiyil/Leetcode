/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr=n.toString().split('')
    let product=arr.reduce((val,i)=>val*Number(i),1)
    let sum=arr.reduce((val,i)=>val+Number(i),0)
    return product-sum;
};