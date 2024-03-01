/*
A deep copy is a copy of an object whose references are not the same as the original object. 
This means that if you change the value of a property in the deep copy, it will not change the value of the property in the original object. 
*/

const originalObject = { name: 'Mayur', age: 32 };

const cloneDeepCopy = JSON.parse(JSON.stringify(originalObject));

cloneDeepCopy.name = "Rahul";

console.log(originalObject, "original object");
console.log(cloneDeepCopy, "references object");