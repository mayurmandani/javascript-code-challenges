/* 
const songsList=[{name:"aaaaaa..",artist:"A"},{name:"cccccccc..",artist:"B"},{name:"abababa..",artist:"C"},
          {name:"dddddd..",artist:"A"},{name:"eeeeee..",artist:"A"},{name:"ffffff..",artist:"B"},
           {name:"ggggg..",artist:"A"}];
Output: result = {A:4,B:2,C:1} 
*/

const songsList=[{name:"aaaaaa..",artist:"A"},{name:"cccccccc..",artist:"B"},{name:"abababa..",artist:"C"}, {name:"dddddd..",artist:"A"},{name:"eeeeee..",artist:"A"},{name:"ffffff..",artist:"B"},{name:"ggggg..",artist:"A"}];

let result = {};
for(let elem of songsList) {
    if(result[elem.artist]) {
        result[elem.artist] += 1;
    } else {
        result[elem.artist] = 1;
    }
}

console.log(result, "result");