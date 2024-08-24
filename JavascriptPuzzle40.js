/* Write the function to calculate the consequencesSum of array[1, 2, 3] and expected output is [1, 3, 6] */

let arr = [1, 2, 3];

function consequenceSum(arr) {
    let output = [];
    let len = arr.length;
    let prevSum = 0;
    for(let i = 0; i < len; i++) {
        prevSum = arr[i] + prevSum;
        output.push(prevSum);
    }
    return output;
}

console.log("output", consequenceSum(arr));
// output [ 1, 3, 6 ]