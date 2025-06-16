/* Use Stack-based Iterative Approach (Non-Recursive)  - This avoids stack overflows for very deep arrays - better for large or deeply nested data. */

const arr = [1, 2, [3, 4, [5, 6]]];

function flatten(arr) {
  const stack = [...arr];
  const result = [];
 
  while(stack.length) {
    const next = stack.pop();

    if(Array.isArray(next)) {
      stack.push(...next); // Spread to flatten one level
    } else {
      result.push(next);
    }
  }

  return result.reverse(); // Since we processed in reverse order
}

console.log(flatten(arr)); // [ 1, 2, 3, 4, 5, 6 ]