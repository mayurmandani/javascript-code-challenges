/* Write a function in javaScript which will take input as const array1 = [1, 0, 2, 3, 4] 
and const array2 = [3, 5, 6, 7, 8, 13] and return Output: [4, 5, 8, 10, 12, 13] */

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

function addArrays(array1, array2) {
  const maxLength = Math.max(array1.length, array2.length);
  const result = [];

  for(let i = 0; i < maxLength; i++) {
    result.push((array1[i] || 0) + (array2[i] || 0));
  }
  return result;
}

console.log(addArrays(array1, array2)); // [ 4, 5, 8, 10, 12, 13 ]