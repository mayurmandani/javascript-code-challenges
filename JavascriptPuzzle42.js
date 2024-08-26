/* Implement Promise Polyfills */

// Defining a custom Promise implementation
window.MyPromise = function(executor) {
    // Initialize resolve function
    let resolveFn = null;
    // Initialize reject function
    let rejectFn = null;
    // Flag to track if the promise has already been settled
    let settled = false;

    // Function to settle the promise with a status and value
    const settle = function(status, value) {
        //If already settled, do nothing
        if(settled) return;
        // Mark the promise as settled
        settled = true;

        // Use setTimeout to mimic asynchronous behavior
        setTimeout(() => {
            if (status == 'resolved') {
                // Call the resolve function with the value
                resolveFn(value);
            } else if (status == 'reject') {
                rejectFn(value);
                // Call the reject function with the value
            }
        }, 0);
    }

    // Function to resolve the promise with a value
    const resolve = function(value) {
        // Settle the promise as resolved
        settle('resolved', value);
    }

    // Function to reject the promise with a value
    const reject = function(value) {
        // Settle the promise rejected
        settle('rejected', value);
    }

    // Execute the executor function with resolve and reject functions as arguments
    executor(resolve, reject);

    // Return an object with a 'then' method for chaining
    return {
        then: (onResolve, onReject) => {
            // Set the resolve function for 'then' method
            resolveFn = onResolve;
            // Set the reject function for 'then' method
            rejectFn = onReject;
        }
    }
}

// Create a new promise using the custom MyPromise implementation
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        const i = 5;
        if( i % 2 == 0) {
            // Resolve the promise with the value 5
            resolve(i);
        } else {
            // Reject the promise with an error message
            reject('given number is not even');
        }
    }, 0);
});

// Use the 'then' method to handle resolved and rejected states of the promise
promise.then(
    (value) => {
    // Output: calling polyfill resolved 5
    console.log('calling polyfill resolved', value);
    },
    (rejected) => {
        // Output: calling polyfill rejected given number is not even
    console.log('calling polyfill rejected', rejected);    
    }
);