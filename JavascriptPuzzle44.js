

function tricky() {
    for(var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}

tricky();

// for the 1st iteration, var i is declared and is assigned the value i=0,then comes the async function with a callback which gets pushed to the eventqueue(1).

// for the 2nd iteration, since var i is function-scoped its not declared again ,previous value is passed on and incremented making i=1,then comes the async function with a callback which gets pushed to the eventqueue(2).

// for the 3rd iteration i=2,then callback is pushed(3).

// for the 4th iteration i=3,then callback is pushed(4).

// for the 5th iteration i=4,then callback is pushed(5). now i=5 but loop fails since the condition is false(i>5).

// since call stack is now empty ,the event queue gets executed which has five callback functions to log the value of the var i. So, it prints 5 five times
