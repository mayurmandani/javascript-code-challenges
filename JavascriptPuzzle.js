/* What will be the output of the console? */


function Person(name) {
    this.name = name;
}

Person.prototype.age = 35;

const viratKohli = new Person("Virat");

console.log(Object.values(viratKohli));
// [ 'Virat' ]

const arr = [];

for(let key in viratKohli) {
    arr.push(viratKohli[key]);
}

console.log(arr);
// [ 'Virat', 35 ]