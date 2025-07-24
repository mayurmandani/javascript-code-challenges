/* Write a function primesInRange which takes 2 argument start and end. it display all prime numbers in between Range */

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


function primesInRange(start, end) {
  const primes = [];

  for(let i = start; i <= end; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(primesInRange(10, 30));  // [ 11, 13, 17, 19, 23, 29 ]