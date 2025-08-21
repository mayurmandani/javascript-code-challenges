/* Find Subsets of an Array */

function subsets(arr) {
  const result = [[]];
  for(let num of arr) {
    const len = result.length;
    for(let i = 0; i < len; i++) {
      result.push([...result[i], num]);
    }
  }
  return result;
}

console.log(subsets([1, 2])); // [ [], [ 1 ], [ 2 ], [ 1, 2 ] ]