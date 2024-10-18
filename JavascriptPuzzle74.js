/* Reverse the array index value in array, input is [12, 13, 14, 15, 16, 17, 18, 19] and expected output is [21, 31, 41, 51, 61, 71, 81, 91] */

const arr = [12, 13, 14, 15, 16, 17, 18, 19];

function reverseArr(arr) {
    let output = [];
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let temp = num.toString().split("").reverse().join("");
        let revNumber = parseInt(temp);
        output.push(revNumber);
    }
    return output;
}

console.log(reverseArr(arr));