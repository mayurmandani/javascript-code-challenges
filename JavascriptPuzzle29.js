/* Write a Javascript function countStr to convert input = "aabbbc" to output = 2a3b1c */

let input = "aabbbc";

function countStr(input) {
    let x = 1;
    let output= "";
    for(let i = 0; i < input.length; i++) {
            if(input[i] === input[i + 1]) {
                x += 1;
            } else {
                output += x + input[i];
                x = 1; 
            }
    }
    return output;
}

console.log(countStr(input));