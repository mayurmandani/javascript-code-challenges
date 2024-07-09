/* Write a program to convert input [1,2,3,4,5] to output want to be [5,1,4,2,3] */

let input = [1,2,3,4,5];

function changeArr(input) {
    let output = input;
    output[0] = 5;
    output[1] = 1;
    output[2] = 4;
    output[3] = 2;
    output[4] = 3;
    return output;
}

console.log(changeArr(input));

