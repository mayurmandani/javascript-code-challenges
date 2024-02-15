/* 

Find the Maximum Value in an Array  
let numbers = [3, 7, 8, 9, 10 ,15, 4]; 
max = 15;

*/
// Solution - 1 using for loop 

/*let numbers = [3, 7, 8, 9, 10 ,15, 4];

let max = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Maximum Value in an Array", max); */

// Solution - 2 Math.max with the Spread Operator

/* let numbers = [3, 7, 8, 9, 10 ,15, 4];

let max = Math.max(...numbers);

console.log("Maximum Value in an Array", max); */

// Solution - 3 Using Reduce Method

let numbers = [3, 7, 8, 9, 10 ,15, 4];

let max = numbers.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue);
}, numbers[0]);

console.log(max);
