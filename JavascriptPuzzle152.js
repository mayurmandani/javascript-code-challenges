/* collect the duplicate number value from the array using the filter() method */

const arr = [1, 1, 1, 1, 2, 2, 2, 8];

const ListDuplicate = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(ListDuplicate);