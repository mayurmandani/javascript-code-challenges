/* What is the output of following codes: */

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise Resolved"));

console.log("End");

// Start
// End
// Promise Resolved
// Timeout