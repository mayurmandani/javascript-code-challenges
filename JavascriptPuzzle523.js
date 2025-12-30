// What will be the output of the following code snippet?

let x = 10;

function updateX() {
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

updateX();  

// 20  
// 10