/* Given an nested object which can have any type of object, deep flatten it and return the new
object in javascript 
let input = { 
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2] 
    }
}

output : {
       "A": "12",
       "B": 23,
       "C.P": 23,
       "C.O.L": 56,
       "C.Q.0": 1,
       "C.Q.1": 2, 
}
*/

let input = { 
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2] 
    }
}

const solution = (obj, prefix = '') => {
    let output = {};
    for(let key in obj) {
        let val = obj[key];
        let newKey = prefix === '' ? key : prefix +'.'+key;
        if(val !== null && typeof val === 'object') {
            let recursiveOutput = solution(val, newKey);
            output = {...output, ...recursiveOutput};
        } else {
            output[newKey] = val;
        }
    }
    return output;
}


console.log(solution(input));

