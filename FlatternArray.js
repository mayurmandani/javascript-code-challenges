/* Write a function for the array, expected output will be [1,2,3,4,5,6] */

const arr = [1,2,[3,4,[5,6]]];

function flattern(arr) {
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if(Array.isArray(currentElement)) {
        let flattedArray = flattern(currentElement);
        output.push(...flattedArray);
    } else {
        output.push(currentElement);
    }
  } 
  return output;
}

console.log(flattern(arr), "output");

// solution 2 - Using the flat method

const newArr = arr.flat(2);
console.log(newArr, "newArr");