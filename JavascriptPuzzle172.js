/* Calculate the mean and median values of the number elements from the input array. 
const arr = [12, 46, 32, 64];
output = { mean: 38.5, median: 39 } */

const arr = [12, 46, 32, 64];

// sort method is used to sort the array value in ascending order.
let sortedArr = arr.sort((a, b) => a - b);

let output = sortedArr.reduce((accumulator, currentValue, index, array) => {
        accumulator.mean += currentValue / array.length;

        if(array.length % 2 === 0) {
          // if the array has an even number of elements
          if(index === array.length / 2 - 1) {
            accumulator.median += currentValue;
          } else if (index === array.length / 2) {
            accumulator.median += currentValue;
            accumulator.median = accumulator.median / 2;
          }
        } else {
          // if the array has an odd number of elements
          if(index === (array.length - 1) / 2) {
            accumulator.median = currentValue;
          }
        }
        return accumulator;
    },
    { mean : 0, median: 0}
);

console.log(output); // { mean: 38.5, median: 39 }