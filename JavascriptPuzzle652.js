// What is the output of the following code?

async function test() {
    try {
        await Promise.reject("Error");
        console.log("Success");
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Completed");
    }
}

test();
console.log("Outside");

/* 
Outside
Error
Completed
*/