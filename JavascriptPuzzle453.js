/* What will be the output of the below code: */

function sayHello() {
  console.log(name);  // undefined (because var name exists but not yet assigned).
  console.log(age);  // ReferenceError: Cannot access 'age' before initialization.
  var name = 'Alice';
  let age = 22;
}

sayHello();