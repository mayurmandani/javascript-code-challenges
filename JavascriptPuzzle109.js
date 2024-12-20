/* Explain the concepts of call, apply, and bind in JavaScript. Provide examples */

const person = { name: 'Mayur'};

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

// using the call
greet.call(person, "Hello"); // Hello, Mayur

// using the apply

greet.apply(person, ["Hi"]); // Hi, Mayur 

// using the bind

const greetBound = greet.bind(person); // Hey, Mayur
greetBound("Hey");
