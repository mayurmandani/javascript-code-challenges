/* Write a example of Passing Functions and Functions can be passed as arguments too */

function greet(name) {
    console.log(`Hello, ${name} !`)
}

function processUser(greetingFunction) {
    greetingFunction('Mayur')
}

processUser(greet) // Output : Hello, Mayur !