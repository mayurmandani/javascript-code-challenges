/* Write a function GCD to Calculate  */

function gcd(a, b) {
  if(!b) return a;
  return gcd(b, a % b);
}

console.log(gcd(12, 8));  // 4