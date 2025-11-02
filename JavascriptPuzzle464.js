/* Find missing number in a sequence */

const arr = [1, 2, 5, 4];

function findMissing(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1))/ 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total- sum;
}

console.log(findMissing(arr)); // 3

