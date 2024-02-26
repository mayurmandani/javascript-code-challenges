/* Implement a function that returns an updated array with right rotations on an array of integers k.
Example:
Given the following array: [2,3,4,5,7]
Perform 3 right rotations:
First right rotation : [7,2,3,4,5] 
Second right rotation : [5,7,2,3,4] and, 
Third right rotation: [4,5,7,2,3] */


const arr = [2,3,4,5,7];

function rotationArray(arr, k) {
    for(let i = 0; i < k; i++) {
       arr.unshift(arr.pop());
    }
    return arr;
}

console.log(rotationArray(arr, 1), "First right rotation");
console.log(rotationArray(arr, 1), "Second right rotation");
console.log(rotationArray(arr, 1), "Third right rotation");