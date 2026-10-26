/* Write an example Prototype inheritance and method overriding in Javascript */

const parent = {
  value: 10,
  getValue() {
    return this.value;
  }
};

const child = Object.create(parent);
child.value = 20; 

console.log(child.getValue());  // 20

console.log(parent.getValue()); // 10

console.log(child.hasOwnProperty("value"));  // true

console.log(child.hasOwnProperty("getValue")); // false

