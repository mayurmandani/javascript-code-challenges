/* Find the only duplicate number from Array  

const arr = [1, 2, 3, 4, 5, 6, 3, 3, 2, 4, 5, 4];
expected output = [2, 3, 4, 5];

*/

const arr = [1, 2, 3, 4, 5, 6, 3, 3, 2, 4, 5, 4];

function findDuplicate(arr) {
  const duplicates = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
       if(arr[i] === arr[j]) {
        if(!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
       }
    }
  }
  return duplicates;
}


console.log(findDuplicate(arr));