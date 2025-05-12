/* What will be the output of below code snippet? */

const promise1 = Promise.resolve("One");
const promise2 = Promise.resolve("Two");

Promise.all([promise1, promise2]).then(([result1, result2]) => console.log(result1 + ' ' + result2));

// One Two