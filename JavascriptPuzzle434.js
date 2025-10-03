/* What will be the output of the below code: */

function test(flag) {
  if(flag) {
    console.log("Inside if");
    return;
  }
  console.log("After if");
  return "Returned after if";
}

console.log(test("non-empty string")); // Inside if