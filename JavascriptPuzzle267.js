/* Recursive factorial of a number - Give an integer 'n', find the factorial of that integer */

function recursiveFactorial(n) {
  if( n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}


console.log(recursiveFactorial(0)); // 0
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120