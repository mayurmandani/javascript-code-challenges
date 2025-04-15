/* Use Array.from for converting an array-like object to an array. */

const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

const arr = Array.from(arrLike);

console.log(arr); // [ 'foo', 'bar', 'baz' ]