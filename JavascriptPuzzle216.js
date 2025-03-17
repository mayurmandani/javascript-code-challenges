/* What will be the output of the following code? */

let x = 10;

function outer() {
  console.log(x);

  if(false) {
    var x = 20;
  }
}

outer(); // undefined