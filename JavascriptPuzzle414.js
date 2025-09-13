/* Write a function addValue, it will take array [1, 2, 3, 4, 5] and return output as [2, 3, 4, 5, 6]; */

let arr = [1, 2, 3, 4, 5];

function addValue(arr) {
  let output = [];
  for(let i = 0; i < arr.length; i++) {
      let item = arr[i] + 1;
      output.push(item);
  }
  return output;
}

console.log(addValue(arr)); // [ 2, 3, 4, 5, 6 ]



