// Set object allows you to store unique values of any type, whether they are primitive values or object references.

// We can create a Set instance using the Set constructor.
const set1 = new Set();
console.log(set1, "set1");

const set2 = new Set(["a", "b", "c", "d", "e"]);
// we can use the add method to add a new value to a Set instance.
set2.add("f");
set2.add("g").add("h").add("i").add("j").add("k");
console.log(set2, "set2");

// We can use the has method to check if a specific value exists in a Set instance.
set2.has("j");
console.log(set2.has("j"));

// We can use the size property to get the length of a Set instance.
set2.size;
console.log(set2.size);

// We can use clear method can be used to remove all data from a Set. 
set2.clear;
console.log(set2.clear, "set2 clear");