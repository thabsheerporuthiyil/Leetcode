/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    sentence=sentence.toLowerCase();
    let letters="abcdefghijklmnopqrstuvwxyz";
    for(char of letters){
        if(!sentence.includes(char)){
            return false;
        }
    }
    return true;
};