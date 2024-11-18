/* Write the function add, it takes n number of arguments. incase of add("") it will be return 0
incase of add("1", "3", "0") it will be sum of number 4
incase of add("1", "-2", "3", "0") it will be throw error, Negative numbers are not allowed */

function add(...str) {
    let total = 0;
    for(let i = 0; i < str.length; i++) {
        if(Number(str[i]) < 0) {
            throw new Error("Negative numbers are not allowed");
        }
        total += Number(str[i])
    }
    return total;
}

console.log(add(""));
console.log(add("1", "3", "0"));
console.log(add("1", "-2", "3", "0"));