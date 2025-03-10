/* Write a function to make the following code snippet work? 

console.log(sum(4, 6, 8, 10).value); // output: 28
console.log(sum(4)(6)(8)(10).value); // output: 28

*/

function sum(...args) {
  const output = args.reduce((a, b) => a + b, 0);  // get the sum of all array elements

  const myFunc = (num) => {
    return sum(num, ...args);
  }

  myFunc.value = output;

  return myFunc;

}

console.log(sum(4, 6, 8, 10).value); // output: 28
console.log(sum(4)(6)(8)(10).value); // output: 28