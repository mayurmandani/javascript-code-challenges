/* How do you clone or copy an Object? */
const originalObject = {
    name: 'Happy',
    age: 35,
    city: 'Delhi',
};

// Method 1: Spread syntax (shallow copy)
const clonedObjectSpread = {...originalObject};
console.log(clonedObjectSpread);

// Method 2: Object.assign() (shallow copy)
const clonedObjectAssign = Object.assign({}, originalObject); // Parameters: target, source
console.log(clonedObjectAssign);

// Method 3: JSON.parse() and JSON.stringify() (deep copy)
originalObject.city = "Mumbai";
const clonedObjectJSON = JSON.parse(JSON.stringify(originalObject));
originalObject.city = "Delhi";
console.log(clonedObjectJSON);


