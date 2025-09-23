/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr=s.split(' ');
    let result=arr.slice(0,k)
    let final=result.join(' ')
    return final;
};