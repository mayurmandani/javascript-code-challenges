/* How do you check if an property exists in an Object? */

var person = {
    name: "Alice",
    age: 25
}

// 1 Using the in Operator
console.log("name" in person);
console.log("city" in person);

// 2 Using the hasOwnProperty Method
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("city"));

// 3 Comparing with undefined
console.log(person.name !== undefined);
console.log(person.city !== undefined);