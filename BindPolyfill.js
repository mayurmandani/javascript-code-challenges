let obj = {
    name: 'Mayur',
};

let displayDetails = function (id, city) {
    console.log(`${this.name}, ${id}, ${city}`);
};

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function(obj, ...args) {
    let func = this;
    // Accepting arguments passed to newFunc
    return function(...newArgs) {
        func.apply(obj, [...args, ...newArgs]);
    }
};

let newFunc = displayDetails.myBind(obj, '1')
newFunc('Vadodara') // Mayur, 1, Vadodara