// What is the output of the following code?

function a() {
    let x = 10;

    return function b() {
        let y = 20;

        return function c() {
            console.log(x + y);
        };
    };
}

a()()();  // 30