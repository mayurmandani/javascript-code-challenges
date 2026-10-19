// What is the output of the following code?

const person = {
    name: "Mayur"
};

function greet() {
    console.log(`Hello ${this.name}`);
}

greet.call(person);  // Hello Mayur
greet.apply(person); // Hello Mayur

const fn = greet.bind(person);

fn();  // Hello Mayur