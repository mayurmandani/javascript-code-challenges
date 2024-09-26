// inline caching concept
function finduser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'Mayur',
    lastName: 'Mandani'
}

console.log(finduser(userData));

// hidden class concept
function Animal(x, y) {
    this.x = x;
    this.y = y;
} 

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

console.log(obj1);
console.log(obj2);

