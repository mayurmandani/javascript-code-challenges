/* What will be the output of the following code? */

const arr = [1, 2, 3, 4, 5];

for(var i = 0; i < arr.length; i++) {
   setTimeout(function () {
      console.log(i);
   }, 1000);
}

// 5
// 5
// 5
// 5
// 5