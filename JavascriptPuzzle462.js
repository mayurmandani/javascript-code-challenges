/* Implement Object.create Polyfill method */

if(typeof Object.create !== 'function') {
  Object.create = function (proto) {
    if(typeof proto !== 'object' && proto !== null)
      throw new TypeError('Prototype must be object or null');
    function F() {}
    F.prototype = proto;
    return new F();
  };
}


let obj = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
}

let newObj = Object.create(obj);

newObj.name = "Mayur";
newObj.isHuman = true;

newObj.printIntroduction();

