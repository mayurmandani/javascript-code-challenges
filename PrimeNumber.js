// Write a Javascript function to check if a given number is prime or not

function isPrime(num) {
    if(num <= 1) {
        console.log(`${num} is not prime number`);
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            console.log(`${num} is not prime number`);
            return false;
        }
        console.log(`${num} is prime number`);
        return true;
    }
}

console.log(isPrime(11))