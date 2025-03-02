/* What is the output of the below code */

const arrowFun = (a, b, a) => console.log(a);

console.log(arrowFun(5,7,8)); 

// SyntaxError: Duplicate parameter name not allowed in (arrow function) this context.