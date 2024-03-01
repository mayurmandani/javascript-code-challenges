/* 
A Generator function in JavaScript is a special type of function that can be paused and resumed during its execution.
When a generator function called it returns a generator object that can be used to control the execution of the function by calling the next() method.
The function’s code can be paused within the body using the yield keyword, and it can later be resumed from the exact point where it was paused.
*/

function* numberGenerator() {
       let i = 0;
       while(true) {
        yield i++;
       } 
}

const gen = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
