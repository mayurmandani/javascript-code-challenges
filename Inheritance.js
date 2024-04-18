/* Understanding Prototype and Prototypal Inheritance */

let object = {
    name: "Mayur",
    city: "Vadodara",
    getIntro: function () {
        console.log(this.name + "from" + this.city);
    }
}

let object2 = {
    name: "Aditya"
}

object2.__proto__ = object; // Inheritance prototype

console.log(object2.name); // getting the value from own object
console.log(object2.city); // getting the property value through chaining from parent object 
console.log(object2.getIntro()); // getting the method value through chaining from parent object 