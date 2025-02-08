/* collect the unique number value from the array using the reduce() method */

const arr = [1, 1, 1, 1, 2, 2, 2, 8];

let uniqueValue = arr.reduce((acc, curr) => {
  if(!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueValue);