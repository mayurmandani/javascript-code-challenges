/* Use Case: Avoiding unintended mutations in complex data structures. 

Flatten Function: Keeping It Flat and Simple

Flattening nested arrays into a single-level array makes data handling much easier. 
This function reduces complexity in processing hierarchical structures.

*/

const arr = [1, [2, [3, [4]]]];

function flatten(arr) {
  return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flatten(item) : item), []);
}

const output = flatten(arr);

console.log(output);  // [ 1, 2, 3, 4 ]