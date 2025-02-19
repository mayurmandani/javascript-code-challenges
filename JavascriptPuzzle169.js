/* What is the output of the below code */

let obj = null;

if(obj) {
  console.log("Object exists!");
} else {
  console.log("Object does not exist!");
}

// obj is assign with null, since null is a falsey value in javascript hence else part will execute.