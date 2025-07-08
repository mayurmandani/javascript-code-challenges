/* What will be the output of the below code: */

function fun(y) {
  let a = 10;
  y();
}

function x() {
  let a = 5;
  const p = () => console.log(":: value of a", a);
  a = 8;
  fun(p);
}

x();  // :: value of a 8