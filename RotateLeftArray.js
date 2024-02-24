/* Implement a function that returns an updated array with left rotations on an array of integers k.
Example:
Given the following array: [2,3,4,5,7]
Perform 3 left rotations:
First left rotation : [3,4,5,7,2] 
Second left rotation : [4,5,7,2,3] and, 
Third left rotation: [5,7,2,3,4] */

const arr = [2,3,4,5,7];

function rotateLeftArr(arr, k){ 
    for(let i = 0; i < k; i++) {
     arr.push(arr.shift());
    }
    return arr;
}

console.log(rotateLeftArr(arr, 1), "First left rotation");
console.log(rotateLeftArr(arr, 1), "Second left rotation");
console.log(rotateLeftArr(arr, 1), "Third left rotation");