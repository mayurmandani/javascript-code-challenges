/* Use Tail Recursion with for... of loop - this avoids managing indexes and inprove readability slightly.  */

const arr = [1, 2, [3, 4, [5, 6]]];

function flatten(arr) {
  const output= [];
  for(const item of arr) {
    if(Array.isArray(item)) {
      output.push(...flatten(item));
    } else {
      output.push(item);
    }
  }
  return output;
}

console.log(flatten(arr));  // [ 1, 2, 3, 4, 5, 6 ]