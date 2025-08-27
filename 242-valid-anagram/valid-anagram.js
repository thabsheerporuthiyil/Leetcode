/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let Ssorted=s.split('').sort().join('')
    let tSorted=t.split('').sort().join('')
    return Ssorted===tSorted;
};