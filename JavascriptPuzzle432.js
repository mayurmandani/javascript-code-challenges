/* Write a Polyfill myFind method using the Array.prototype.myFind */

if(!Array.prototype.myFind) {
  Array.prototype.myFind = function (callback, thisArg) {
    if(this == null) {
      throw new TypeError('Array.prototype.myFind called on null or undefined');
    }
    if(typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }

    let arr = this;

    for(let i = 0; i < arr.length; i++) {
      if(i in arr) {
        if(callback.call(thisArg, arr[i], i, arr)) {
          return arr[i]; // return first match
        }
      }
    }
    return undefined; // if nothing matches
  };
}

const numbers = [1, 2, 3, 4, 5, 6];

const firstValueGreaterThan3 = numbers.myFind((num) => num > 3);

console.log(firstValueGreaterThan3); // 4