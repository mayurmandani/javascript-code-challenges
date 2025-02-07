/* collect the unique number value from the array using the forEach() method */

const arr = [1, 1, 1, 1, 2, 2, 2, 8];

const uniqueValue = [];

arr.forEach(element => {
  if(!uniqueValue.includes(element)) {
    uniqueValue.push(element);
  }
});

console.log(uniqueValue);