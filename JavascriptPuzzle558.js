// What is the output of the following code?

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = false;
        if (result) resolve("Promise fulfilled the code");
        else reject(new Error ("Promise are failed"));
    }, 1000);
});

sub.then((res) => {
    console.log(res);
})
.catch((err) => console.log(err));

/* 
Error: Promise are failed
*/