// What is the output of the following code?

const id = Symbol("id");

const user = {
    name: "Mayur",
    [id]: 101
};

console.log(Object.keys(user));  // [ 'name' ]
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]
console.log(user[id]); // 101

