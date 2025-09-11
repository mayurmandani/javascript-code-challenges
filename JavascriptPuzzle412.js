/* What will be the output of the following code? */

function Parent() {}

function Child() {}

Child.prototype = new Parent(); // Child prototype is set to an instance of Parent, creating a prototype chain.

var obj = new Child(); // obj is created using the Child constructor, it inherits from Parent

console.log(obj instanceof Parent); // true