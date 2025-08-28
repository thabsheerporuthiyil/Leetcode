/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num>=10){
        let sum=0;
        let n=num.toString();
        for(let i=0;i<n.length;i++){
            sum+=parseInt(n[i]);
        }
        num=sum;
    }
    return num;
};