/* What will be the output of the following code? */

const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);

person.age = 40;

console.log(person.age);  // 30 