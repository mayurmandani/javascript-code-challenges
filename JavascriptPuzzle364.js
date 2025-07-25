/* Find the second largest number from the array  

input = [1, 3, 5, 8, 2, 9, 2, 3, 1];
output = 8

*/

function secondLargest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([1, 3, 5, 8, 2, 9, 2, 3, 1]));  // 8