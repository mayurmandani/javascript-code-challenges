/* 
A closure is the combination of function bundled toghether (enclosed) with references to its
surrounding state(the lexical environment).
a closure gives a function access to its outer scope.
In Javascript closures are created every time a function is created, at function creation time
*/

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
       console.log(name); 
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();


function makeAdder(x) {
   return function (y) {
      return x + y;
   };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2))  // 7
console.log(add10(2)) // 12
