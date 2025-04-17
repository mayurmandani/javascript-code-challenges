/* Write a function which accept number as argument and return the sum of all number */

// using the Big - O Time complexity

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(summation(10))  // 55 