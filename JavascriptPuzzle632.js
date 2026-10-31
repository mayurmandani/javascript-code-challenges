// What is the output of the following code?

const arr = [1, , 3];

console.log(arr.length);  // 3 
console.log(arr.map(x => x * 2));  // [ 2, <1 empty item>, 6 ]
console.log([...arr]); // [ 1, undefined, 3 ]
console.log(0 in arr); // true
console.log(1 in arr); // false