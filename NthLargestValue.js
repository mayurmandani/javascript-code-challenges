/* Write the function for find the nthLargest value based on passing parameter index value from the array */
// nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// expected output is the 89

const arr = [ 43, 56, 23, 89, 88, 90, 99, 652];

function nthLargest(arr, i) {
    let newArr = arr.sort((a, b) => a - b);
    return newArr[i];
}

console.log(nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));