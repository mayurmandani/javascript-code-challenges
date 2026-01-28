// What is the output of the following code?

console.log("start");

const Promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
});

Promise1.then((res) => {
        console.log(res);
});

console.log("end");

/* 
start
1
3
end
2
*/
