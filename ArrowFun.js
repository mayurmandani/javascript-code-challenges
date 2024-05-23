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