/* Write the class object creation example */ 

class Car {
    constructor(model, color, year, owner) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.owner = owner;
    }
    wheelNumber() {
        return 4;
    }
}

class LuxuryCar extends Car {
    constructor(model) {
        super(model)
    }
    isLuxury() {
        return true;
    }
}

const myCar = new LuxuryCar("BMW");

console.log(myCar);