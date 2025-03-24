/*  Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.
*/

// The prototype chain

const myObject = {
      city: "Vadodara",  // data property, city
      greet() {  // one method, greet()
        console.log(`Greetings from ${this.city}`);
      }
}

myObject.greet();

console.log(myObject.__defineGetter__, "defineGetter");
console.log(myObject.__defineSetter__, "defineSetter");
console.log(myObject.__lookupGetter__, "lookupGetter");
console.log(myObject.__lookupSetter__, "lookupSetter");
console.log(myObject.__proto__, "__proto__");

console.log(myObject.city, "city");
console.log(myObject.constructor, "constructor");
console.log(myObject.greet, "greet");
console.log(myObject.hasOwnProperty, "hasOwnProperty");
console.log(myObject.isPrototypeOf, "isPrototypeOf");
console.log(myObject.propertyIsEnumerable, "propertyIsEnumerable");
console.log(myObject.toLocaleString, "toLocaleString");
console.log(myObject.toString, "toString");
console.log(myObject.valueOf, "valueOf");