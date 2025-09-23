/* What will be the output of the below code: */

const user = { name: "Kumar", details: { age: 25 }};

const { details: { age } } = user;

console.log(age); // 25