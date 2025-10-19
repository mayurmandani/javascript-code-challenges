/* Write a function arrayToObject which takes an array of objects and returns output as an object. 

let obj = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] ;

let output = { '1': 'A', '2': 'B' }

*/

function arrayToObject(arr) {
  return arr.reduce((acc, item) => {
     acc[item.id] = item.name;
     return acc;
  }, {});
}

let obj = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

let output = arrayToObject(obj);

console.log(output); // { '1': 'A', '2': 'B' }


