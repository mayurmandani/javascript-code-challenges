/* check it, object is array or not */

let arrayList = [1, 2, 3];

console.log(Array.isArray(arrayList)); // true

if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array'); 
}

// Array