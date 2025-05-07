/* Create your own polyfill method myMap */

const arr = [1, 2, 3, 4, 5];

function callback(ele) {
  return ele * 2;
}

Array.prototype.myMap = function(callback) {
  const myArr = [];
  for(const i in this) {
    myArr.push(callback(this[i]));
  }
  return myArr;
}

const newArr = arr.myMap(callback);

console.log(newArr);
