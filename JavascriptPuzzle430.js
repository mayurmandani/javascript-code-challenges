/* The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs. */

const obj = { a: 5, b: 7, c: 9 };

// Using for...of loop
for(const [key, value] of Object.entries(obj)) {
  console.log(`${key} : ${value}`);
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});