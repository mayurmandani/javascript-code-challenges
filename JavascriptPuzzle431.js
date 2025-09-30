/* Write a Polyfill myFilter method using the Array.prototype.myFilter */


if(!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {
    if(this == null) {
      throw new TypeError('Array.prototype.myFilter called on null or undefined');
    }
    if(typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }

    let result = [];
    let arr = this;

    for(let i = 0; i < arr.length; i++) {
      if(i in arr) { // ensure the index exists
        if(callback.call(thisArg, arr[i], i, arr)) {
          result[result.length] = arr[i] // push manually without push()
        }
      }
    }
    return result;
  };
}

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumber = numbers.myFilter((num) => num % 2 === 0);

console.log(evenNumber);  // [ 2, 4, 6 ]