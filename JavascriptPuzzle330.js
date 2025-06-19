/* What will be the output of the below code: */

var x = 0;

for(var i =0; i < 5; i++) {
  setTimeout(() => {
      x++;
      console.log(x);
  }, 1000);
}

/* 
1
2
3
4
5
*/
