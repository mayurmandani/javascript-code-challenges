/* Write a findNumber function to  find missing Number and repeated number from arr = [2, 4, 5, 6, 8] 

expected output { repeatedNumber: [ 4 ], MissingNumber: [ 3 ] } */

const arr = [4,5,2,6,4,1];

function findNumber(arr) {
  let repeatedNumber = arr.filter((item, index) => {
        return arr.indexOf(item) !== index;
  });

  let MissingNumber = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for(let i = min; i <= max; i++) {
      if(!arr.includes(i)) {
        MissingNumber.push(i);
      }
  }

  return {repeatedNumber, MissingNumber}

}

console.log(findNumber(arr)); // { repeatedNumber: [ 4 ], MissingNumber: [ 3 ] }