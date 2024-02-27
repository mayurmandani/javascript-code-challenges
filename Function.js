// Javascript function ways call using parenthesis 

function run() {
    console.log('executed function');
}

// Direct Invocation
run();


// Using call and apply
run.call({});
run.apply({});

// Using setTimeout -  passing function show as callback
setTimeout(run, 0);

// using new keyword
new run();

// Javascript function ways call which doesn’t uses parenthesis.
 
// solution 1 : With new, we can invoke the function without parentheses. The parenthesis are only required when we want to pass some defalut values.

new run; // logs run function

// solution 2 : Using tagged template literal

run``;

// solutin 3 : Using getter property in object

const obj = {
    show: 1,
    get run() {
        console.log('executed function');
    }
}

obj.run;