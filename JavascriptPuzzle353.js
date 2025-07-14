/* What will be the output of the below code: */


Promise.resolve().then(()=>console.log(3));
console.log(4);
setTimeout(() => console.log(5));
console.log(1);

/* 
4
1
3
5
*/