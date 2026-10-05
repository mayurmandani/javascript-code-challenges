// What is the output of the following code?

function displayValue(a = 10) {
  console.log(a);
}

displayValue();  // 10
displayValue(undefined);  // 10
displayValue(null); // null