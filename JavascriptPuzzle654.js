// What is the output of the following code?

const parent = {
    greet() {
        return "Hello";
    }
};

const child = Object.create(parent);

child.name = "Mayur";

console.log(child.name);  // Mayur
console.log(child.greet()); // Hello
console.log(child.hasOwnProperty("greet")); // false
console.log("greet" in child); // true

