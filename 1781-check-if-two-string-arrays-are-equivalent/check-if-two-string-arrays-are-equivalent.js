/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let combined1=word1.join('')
    let combined2=word2.join('')
    return combined1===combined2;
};