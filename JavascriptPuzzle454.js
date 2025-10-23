/* What will be the output of the below code: */

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

/* 
0
1
2
*/

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

/* 
3
3
3
*/