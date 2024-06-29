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

// Object literal
const personDetails = {
   name: "Nitin",
   age: 38,
   role: "Tester"
};

console.log(personDetails);

// Object Constructor
let cutomer = new Object();
cutomer.name = "ABC Info";
cutomer.city = "Ahmedabad";
cutomer.owner = "Mihir Mehta";
console.log(cutomer);