/* Write a function that returns an array containing the common elements between two given arrays */

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];


function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(arrayIntersection(arr1, arr2));