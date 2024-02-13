/*
    var arr=[1,2,3,1,2,4,4,1,2]
    output = {1:3,2:3,3:1,4:2}

*/

var arr=[1,2,3,1,2,4,4,1,2];

function arrayIndexCount() {
  output = {};
    for(let elem of arr) {
        if(output[elem]) {
            output[elem] += 1;
        } else {
        output[elem] = 1;  
        }
    }   
  return output;
}

console.log("output", arrayIndexCount());