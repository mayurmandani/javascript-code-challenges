// Object.create() Method
var person = {
   name: "Mayur",
   age: 30,
   role: "Developer"
};

var men = Object.create(person);
men.name = "Happy";
men.age = 28;
men.role = "Trainer";

console.log(men);