/* What is the output of the below code */

const arr = new Array(3).fill({x:10});

console.log(arr, "original arr");  // [ { x: 10 }, { x: 10 }, { x: 10 } ]

arr[0].x = 11;

console.log(arr, "updated arr"); // [ { x: 11 }, { x: 11 }, { x: 11 } ] 