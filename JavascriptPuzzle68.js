/* What is the output of this code? */

var b = 4;

function outer() {
    var b = 5;

    function inner() {
        b++;
        var b = 6;
        console.log(b);
    }
    inner();
}

outer(); // 6