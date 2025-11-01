/* Implement generic memoization utility function memoize */

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if(cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const factorial = memoize(n => (n <= 1 ? 1: n * factorial(n -1)));

console.log(factorial(5)); // 120