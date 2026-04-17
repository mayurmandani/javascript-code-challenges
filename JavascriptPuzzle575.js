/* reverseArray value without changing on original object */

const array = [1, 2, 3, 4];
const reverseArray = array.toReversed();

console.log("origional", array);  // [1, 2, 3, 4]

console.log("reverseArray", reverseArray); // [ 4, 3, 2, 1 ]