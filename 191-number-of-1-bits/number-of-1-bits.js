/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    n=n.toString(2);
    let count=0;
    for(let val of n){
        if(val==="1"){
            count++;
        }
    }
    return count;
};