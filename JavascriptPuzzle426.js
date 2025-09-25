/* What will be the output of the below code: */

const obj = {
  valueOf() { return 10 },
  toString() { return "20"; }
};

console.log(obj + 5); // 15

console.log(String(obj)); // 20
