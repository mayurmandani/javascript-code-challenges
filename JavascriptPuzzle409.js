/* Write a function parseData which take input as array ["0", "Orange", "1", "Apple", "2", "Mango", "3", "Banana"] and return output as array of objects 
[{ id: '1', name: 'Orange' },{ id: '2', name: 'Apple' }, { id: '3', name: 'Mango' }, { id: '4', name: 'Banana'}] */


const arr = ["0", "Orange", "1", "Apple", "2", "Mango", "3", "Banana"];

function parseData(arr) {
    const arrayOfObjects = [];
    for(let i = 0; i < arr.length;  i = i + 2) {
      const id = arr[i];
      const name = arr [i + 1];
      arrayOfObjects.push({id: parseInt(id) + 1, name: name}); 
    }
    return arrayOfObjects;
}

console.log(parseData(arr));  

/* 
[
  { id: 1, name: 'Orange' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Mango' },
  { id: 4, name: 'Banana' }
]
*/