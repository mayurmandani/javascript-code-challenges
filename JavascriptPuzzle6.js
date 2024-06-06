/* Rest parameters allow you to handle an indefinite number of arguments as an array, 
making your functions more flexible. */


function sum(...args) {
    return args.reduce((total, sum) => total + sum , 0);
}

console.log(sum(1,2,5,9,56));