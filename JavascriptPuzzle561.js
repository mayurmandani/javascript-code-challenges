/* New Binding (Constructor) 

When we use the new keyword, a brand new object is created, and this is bound to that new object. This rule has the highest precedence.

*/

function User(name) {
   // this = {} (created implicitly)
  this.name = name;
  // return this (implicit)
}

const bob = new User('Mayur');

console.log(bob.name); // Mayur