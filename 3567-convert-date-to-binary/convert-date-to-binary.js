/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.split("-").map(each=>Number(each).toString(2)).join("-");
};