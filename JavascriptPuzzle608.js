// What is the output of the following code?

const user = {
    name: "Mayur",
    role: "developer",
    id: 3,
    city: "Surat",
    department: "BFS"
};


const {name, id, ...rest} = user;

console.log(name); // Mayur
console.log(id);  // 3 
console.log(rest); // { role: 'developer', city: 'Surat', department: 'BFS' }