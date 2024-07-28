const a = {val1: 2, val2:3};
const b = a;
b.val1 = 4;

console.log(b) // { val1: 4, val2: 3 }
console.log(a) // { val1: 4, val2: 3 }

const c = {
    val1: 2,
    val2: 3,
    val3: {
        x: 1,
        y: 2
    }
};
const d = { ...c };
d.val1 = 10;
d.val3.x = 5;

console.log(d); // { val1: 10, val2: 3, val3: { x: 5, y: 2 } }
console.log(c); // { val1: 2, val2: 3, val3: { x: 5, y: 2 } } 