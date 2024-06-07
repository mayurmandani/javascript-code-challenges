// Nullish coalescing allows you to provide default values only when the left-hand side is 'null' or 'undefined'.

const user = { name: '', age: 0};
const userName = user.name ?? 'Anonymous';
console.log(userName);

const userAge = user.age ?? 18;
console.log(userAge);



