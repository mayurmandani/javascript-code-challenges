// What is the output of the following code?

function run() {
    var a = 10;
    let b = 20;

    if (true) {
        var a = 30;
        let b = 40;
    }

    console.log(a);
    console.log(b);
}

run();

/* 
30
20
*/