/* Find Missing Number in Array */

function findMissing(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 5, 6], 6));  // 3