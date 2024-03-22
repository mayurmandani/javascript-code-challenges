/* 
Object.values() method takes an object as an argument and return an array containing the values 
of all enumerable properties of the provides object.
*/

const user = {
    name : "Mayur Mandani",
    age: 32,
    city: "Surat"
};

const userName = Object.values(user);

console.log(userName);
// Output: [ 'Mayur Mandani', 32, 'Surat' ]

userName.forEach((value) => {
    console.log(value)
})