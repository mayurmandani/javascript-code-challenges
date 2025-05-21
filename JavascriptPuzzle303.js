/* 
The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. 
If no elements satisfy the testing function, undefined is returned.
*/

const users = [{id: 1, name: 'Hari', age: 19}, {id: 2, name: 'Shiv', age: 14},{id: 3, name: 'Irfan', age: 22}, {id: 4, name: 'Aamir', age: 13}];

const lastUser = users.findLast(user => user.age > 18);

console.log(lastUser);  // { id: 3, name: 'Irfan', age: 22 }