/* Shallow Copy with Nested Objects - If the object has nested objects, a shallow copy will only copy the references to those nested objects, not the objects themselves. */

const originalObject = { user: { name: 'John', age: 30 } };
const shallowCopy = { ...originalObject };

console.log(shallowCopy, "shallowCopy reference");
console.log(originalObject, "originalObject");

shallowCopy.user.name = 'Mike'; // Modifies both shallowCopy and originalObject

console.log(shallowCopy, "Modifies shallowCopy");
console.log(originalObject.user.name); // Output: Mike

// As shown above, a shallow copy will not create a new object for user; it just copies the reference, so modifying it in shallowCopy also modifies the originalObject.


