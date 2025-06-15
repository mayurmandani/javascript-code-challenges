/* Use reduce for a more declarative approach - This version is cleaner and can be slightly faster due to native JS optimizations.  */

const arr = [1, 2, [3, 4, [5, 6]]];

function flatten(arr) {
  return arr.reduce((acc, item) => 
    acc.concat(Array.isArray(item) ? flatten(item) : item), []);
}

console.log(flatten(arr)); // [ 1, 2, 3, 4, 5, 6 ]