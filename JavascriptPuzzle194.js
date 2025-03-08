/* Question: You are given a nested array (e.g., [[1, 2], [3, [4, 5]]]). 

Write a function that flattens the array to a single level (e.g., [1, 2, 3, 4, 5]) and then sorts it in ascending order.

Objective: Assess the ability to manipulate arrays and recursion. */

const arr = [[1, 2], [3, [4, 5]]];

function flattensArr(arr) {
  let output = [];
  for(let i = 0; i < arr.length; i++) {
  	let currentElement = arr[i];
    if(Array.isArray(currentElement)) {
    	let flattedArray = flattensArr(currentElement);  // flattensArr() is recursion
      output.push(...flattedArray);
    } else {
      output.push(currentElement);
    }
  }
  return output;
}

console.log(flattensArr(arr)); // [ 1, 2, 3, 4, 5 ]