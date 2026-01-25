// What is the output of the following code?

 function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(4));  // true
console.log(isInt(4.7)); // false
console.log(isInt(15));  // true
console.log(isInt(0.3)); // false