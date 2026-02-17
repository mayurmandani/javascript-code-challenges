/* Write a function getPositives that receives an array of numbers and returns an array containing only the positive numbers > 0 */


function getPositives(arr) {
   let array = [];

   for(let el of arr) {
     if (el > 0) {
      array.push(el);
     }
   }
   return array;
}


let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

let positiveValue = getPositives(arr);

console.log(positiveValue); // [ 10, 12, 5, 90, 1 ]