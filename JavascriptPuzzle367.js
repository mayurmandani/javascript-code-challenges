/* What will be the output of the below code: */

function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 1000);
    
}

console.log(x());

// undefined
// 1