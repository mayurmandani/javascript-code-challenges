/* 
Write a JavaScript function fibonacciSequence() to generate a FIbonacci sequence.

fibonacciSequence(5);

It should return an array of the fibonacci sequence numbers [ 0, 1, 1, 2, 3, 5 ]. 

*/
 
function fibonacciSequence(input) {

  let sequence = [0, 1];
  let i = 2;

  while(i <= input) {
    sequence[i] = sequence[i - 1] + sequence[i - 2]
    i++;
  }

  return sequence;

}

console.log(fibonacciSequence(5));