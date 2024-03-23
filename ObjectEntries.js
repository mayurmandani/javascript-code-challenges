/* 
Object.entries() method returns an array of arrays of the object's own property, which each subarray containing
the property name as the first element and the property values as the second element.
*/

const user = {
    name : "Mayur Mandani",
    age: 32,
    city: "Surat"
};

const userNames = Object.entries(user);

console.log(userNames);
// Output: [ [ 'name', 'Mayur Mandani' ], [ 'age', 32 ], [ 'city', 'Surat' ] ]

// iterate over userName array using for of loop method
for(const [key, value] of userNames) {
        console.log(`${key}: ${value}`);
}

//iterate over userName array using forEach method
userNames.forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
})
