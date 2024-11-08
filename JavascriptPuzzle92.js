/* Memoise Function , which can make any pure function cached,so that for the same input if we call that function twice,
it will calculate first and for 2nd time return the result from cache */

// memoized function
const memoized = (fn) => {
   const cache = {}

   return (...args) => {
    const argsToString = JSON.stringify(args)
    if (argsToString in cache) {
      console.log(`return the result from cache ${argsToString}`)
      return cache[argsToString]
    }
     else {
      console.log(`it will calculate first ${argsToString}`)
      const result = fn.apply(this, args);
      cache[argsToString] = result
      return result
     }
   }		
}

// factorial function
const factorial = (n) => {
	if(n === 1) {
  return n;
  }
  else {
  return  n * factorial(n - 1);
  }
}

const memoizedValue = memoized(factorial);

console.log(memoizedValue(5));
console.log(memoizedValue(6));
console.log(memoizedValue(7));
console.log(memoizedValue(6));
console.log(memoizedValue(7));
console.log(memoizedValue(5));


