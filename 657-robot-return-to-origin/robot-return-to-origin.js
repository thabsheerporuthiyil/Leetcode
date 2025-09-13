/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x=0,y=0;
    for(let i of moves){
        if(i==='U') y++;
        if(i==='D') y--;
        if(i==='R') x++;
        if(i==='L') x--;
    }
    return x===0 && y===0;
};