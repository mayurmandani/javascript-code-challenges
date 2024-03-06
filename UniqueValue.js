/* write a function to collect the unique values from the array. 
const arr = [1, 2, 1, 3, 4, 3, 5];  output = [1,2,3,4,5] */

const arr = [1, 2, 1, 3, 4, 3, 5];

const uniqueArr = arr.filter((item, index) => {
     return arr.indexOf(item) == index;
});

console.log(uniqueArr);

const newArr = [...new Set(arr)];

console.log(newArr, "unique value using the set");