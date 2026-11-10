// What is the output of the following code?

function outer() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
}

const counter = outer();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // 5

counter.increment();

console.log(counter.getCount()); // 6