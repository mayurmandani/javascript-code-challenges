/* What is a closure in JavaScript? Provide an example */

function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }
    
    return inner;
}

const closeFun = outer();
closeFun();