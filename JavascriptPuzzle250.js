/* What will be the output of the following code? */


(function() {
  var a = b = 3;
})();


console.log(typeof a); // undefined (not accessible outside the function)
console.log(typeof b); // number - 'b' is assigned a value without using let, const, or var, it is implicitly declared in the 'global scope'.