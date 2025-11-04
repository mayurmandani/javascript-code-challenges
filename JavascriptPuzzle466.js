/* Implement Array.prototype.map Polyfill method */

Array.prototype.myMap = function (callback, thisArg) {
  const arr = [];
  for(let i = 0; i < this.length; i++) {
    if( i in this) arr.push(callback.call(thisArg, this[i], i, this));
  }
  return arr;
};

const arr = [1, 2, 3];

const myArr = arr.myMap(x => x * 2);

console.log(myArr); // [ 2, 4, 6 ]