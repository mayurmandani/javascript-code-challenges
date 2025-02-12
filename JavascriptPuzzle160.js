/* Create an object with property counter which keeps incrementing on every access */


function counterObject() {
  const symCounter = Symbol("counter");
 
  const obj = {
    [symCounter]: 0,
 
    get counter() {
      return ++this[symCounter];
    },
 
    set counter(value) {
      throw new Error("Cannot set the counter");
    },
  };
  return obj;
}

const obj = counterObject();

console.log(obj.counter); // 1
console.log(obj.counter); // 2
console.log(obj.counter); // 3