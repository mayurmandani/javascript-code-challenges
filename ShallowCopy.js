/* 
A shallow copy is a copy of an object whose references are the same as the original object. 
This means that if you change the value of a property in the shallow copy, it will also change the value of the property in the original object.
*/

const user = {
    name: "John",
    age: 32,
    job: "React Developer"
}
 const cloneShallowCopy = user;

cloneShallowCopy.job = "Frontend Developer";

console.log(user, "original object");
console.log(cloneShallowCopy, "references object");