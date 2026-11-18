// What is the output of the following code?

Promise.reject("Error")
    .catch(error => {
        console.log(error);
        return "Recovered";
    })
    .then(result => {
        console.log(result);
    });

/*  
Error
Recovered
*/    