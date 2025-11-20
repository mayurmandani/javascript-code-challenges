/* Write a function isPowerOfTwo and Check if Number is Power of Two or not */

function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16));  // true