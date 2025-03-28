/* What will be the output of the following code? */

let obj = { name: "mayur", age: 30 };

let newObj = {...obj, age: 35 };

console.log(obj.age);  // 30 
console.log(newObj.age); // 35