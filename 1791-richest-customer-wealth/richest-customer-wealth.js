/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxValue=0;
    for(let i of accounts){
       let sum = i.reduce((tot,acc)=>tot+acc,0)
       if(sum>maxValue){
        maxValue=sum;
       }
    }
    return maxValue;
};