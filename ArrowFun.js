// Regular function

const obj1 = {
    name : 'Regular function',
    printName: function () {
        console.log(this.name);
    }
};

obj1.printName();

const obj2 = {
    name : 'Arrow function',
    printName: () => {
        console.log(this.name);
        // 'this' here refers to the global object, not obj2
    } 
}

obj2.printName();

/* Arrow functions do not have their own arguments object. If you need to access the arguments passed to an arrow function, 
you would use the arguments of the enclosing non-arrow function. */

function regularFunction () {
    const arrowFunc = () => {
        console.log(arguments);
        // accessing arguments of the enclosing regular function
    }
    arrowFunc();
}

regularFunction(1, 2, 3);

regularFunction(); // If there are no arguments passed, arguments object will throw 'ReferenceError' or black object

/* arrow functions do not have their own new.target bindings.
new.target refers to the constructor function itself. This makes them unsuitable for use as constructor functions */


function RegularBindingFunction() {
    console.log(new.target);
    // accessing new.target inside a regular function
}

const ArrowBindingFunction = () => {
    console.log(new.target);
    // accssing new.target inside an arrow function
}

const obj4 = new RegularBindingFunction();
console.log(obj4, "obj4");

// const obj5 = new ArrowBindingFunction();
// console.log(obj5, "obj5"); // output: undefined