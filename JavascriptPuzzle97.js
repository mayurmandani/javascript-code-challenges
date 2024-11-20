/* What is the output of following codes: */
console.log("Start");

setTimeout(() => {
  console.log("Task 1 complete");
}, 2000);

console.log("Middle");

setTimeout(() => {
  console.log("Task 2 complete");
}, 1000); 

console.log("End");

/*
Start
Middle
End
Task 2 complete 
Task 1 complete
*/

