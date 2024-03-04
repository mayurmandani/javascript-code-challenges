/* write a function to find the duplicates 
const arr = [1, 2, 1, 3, 4, 3, 5];  output = [1, 3] */

const arr = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
});

console.log(toFindDuplicates);
