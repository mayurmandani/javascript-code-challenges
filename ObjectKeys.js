/* 
Object.keys() methods takes a target object as an argument and returns an array containing the names of
all the enumerable properties of the object. This array can then be used with any Javascript loop methods
to iterate and retrieve the value of each property.
*/

const user = {
    name : "Mayur Mandani",
    age: 32,
    city: "Surat"
};

const userName = Object.keys(user);

console.log(userName);
// Output: ["name", "age", "city"]

// iterate over the array returns by the object.keys method
userName.forEach((key, index) => {
    console.log(`${key} : ${user[key]}`)
})
