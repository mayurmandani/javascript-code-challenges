/* Write a function for the below execution code output of both will be same */

console.log(sum(2, 3));
console.log(sum(2)(3));

function sum(x, y) {
    if (y == undefined) {
        return z => {
            return z + x;
        }
    }
    return x + y;
}
