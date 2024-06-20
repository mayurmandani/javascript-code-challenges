let a = { name : 'Mayur' };

Object.freeze(a);
a.name = "Rahul";
a.age = 45;

console.log(a);