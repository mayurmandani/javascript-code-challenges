// What is the output of the following code?

const obj = {
  value: 42,

  regular() {
    return this.value;
  },

  arrow: () => this.value
};

console.log(obj.regular());  // 42
console.log(obj.arrow());  // undefined