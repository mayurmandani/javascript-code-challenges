// Write a Javascript Program to calculate the factorial of a given Number.

function factorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }
};

console.log(factorial(4));