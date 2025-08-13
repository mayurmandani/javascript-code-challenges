/* Write a function arrayIntersection to Find Intersection of Two Arrays.
 
let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];

output : [2, 2]   */

let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];

function arrayIntersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

console.log(arrayIntersection(arr1, arr2)); // [2, 2]