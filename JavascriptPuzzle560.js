/* Arrow functions do not have their own this. Instead, they inherit this from the surrounding scope (Lexical Scoping)  */

const obj = {
  name: 'Arrow',
  regular: function() {
    return (this.name);
  },
  arrow: () => {
    return (this.name);
  }
};

console.log(obj.regular()); // Arrow

console.log(obj.arrow()); // undefined

// It's perfect for callbacks inside methods!

const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
       this.seconds++; // 'this' correctly refers to timer object
       console.log(this.seconds);
    }, 1000);
  }
};

timer.start() // 1 2 3 ...n