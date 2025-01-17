/* Design a private counter function which exposes increment and retrive functionalities */

function privateCounter() {
   var count = 0;
   return {
    increment: function(val = 1) {
      count = count + val;
      return count;
    },
    retrieve: function() {
      return count;
    },
  }
}

const counter = privateCounter();

console.log(counter.increment());   // 1
console.log(counter.increment());   // 2
console.log(counter.retrieve());    // 2
console.log(counter.increment(5));  // 7
console.log(counter.increment());   // 8
console.log(counter.retrieve());    // 8