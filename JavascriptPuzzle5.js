// Find the element using the find method and Find the index in array using the findIndex method.


const users = [ 
    { id: 1, name: "Mayur"}, 
    {id: 2, name: "Ravi" },
];

const user = users.find(u => u.id === 1);

console.log(user, "Finded the element in array using the find method");

const index = users.findIndex(u => u.id === 1);

console.log(index, "Finded the index in array using the findIndex method");