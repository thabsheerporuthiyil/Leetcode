/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    if(s.length<=1) return 0;
    let count=0;
    for (let i = 1; i < s.length; i++){
        if(s[i].toLowerCase()!==s[i-1].toLowerCase()){
            count++;
        }
    }
    return count;
};