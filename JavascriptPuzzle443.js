/* Implement a function mergeObjects to merge two object Without using Object.assign or spread operator */

let obj1 = { a : 1 };
let obj2 = { b : 2 }; 

function mergeObjects(obj1, obj2) {
    const result = {};

    Object.keys(obj1).forEach(key => result[key] = obj1[key]);
    Object.keys(obj2).forEach(key => result[key] = obj2[key]);

    return result;
}

console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 2 }