/* Explicit Binding (call, apply, bind) 

.call() and .apply() these invoke the function immediately.

*/

function introduce(lang1, lang2) {
  return (`I am ${this.name} and I code in ${lang1} and ${lang2}`);
}

const me = { name: "Mayur" };

// arguments separated by comma
console.log(introduce.call(me, 'JS', 'Python')); // I am Mayur and I code in JS and Python

// argument in an array
console.log(introduce.apply(me, ['JS', 'Python']));  // I am Mayur and I code in JS and Python

// .bind() this returns a new function that is permanently locked to the specified context. It does not invoke it immediately.

const boundIntroduce = introduce.bind(me);

console.log(boundIntroduce('JS', 'Python')); // I am Mayur and I code in JS and Python