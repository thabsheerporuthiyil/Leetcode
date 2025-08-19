/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let odd=0
    let even=0;
    for(let i=0;i<num.length;i++){
        let digit=Number(num[i]);
        if(i%2===0){
            even+=digit;
        }else{
            odd+=digit;
        }
    }
    return odd===even;
};