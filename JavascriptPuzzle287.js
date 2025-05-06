/* Write your own call polyfill method and use */

let nameObj = {
  name: "Mayur"
}

let printName = {
 name: 'Mandani',
 sayHi : function(age) {
   console.log(this.name + " age is " + age);
 }
}

Object.prototype.MyCall = function(bindObj, ...args) {
 bindObj.myMethod = this;
 bindObj.myMethod(...args);
}


printName.sayHi.MyCall(nameObj, 36); // Mayur age is 36