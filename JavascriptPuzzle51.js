/* Write the object.create method with object creation example */ 
    const vehicle = {
        isLuxury: false,
        isFourWheeler: false,
        showInfo: function() {
            return `The vehicle ${this.name} is of ${this.color}. It is a luxury vehicle?
            ${this.isLuxury}. Does it have 4 wheel? ${this.isFourWheeler}`
        }
    }

    const car = Object.create(vehicle);

    console.log(car); // {}

    car.name = "Tesla";
    car.color = "Steel";
    car.isFourWheeler = true;
    car.isLuxury = true;

    console.log(car); // { name: 'Tesla', color: 'Steel', isFourWheeler: true, isLuxury: true }

    console.log(car.showInfo()); //  The vehicle Tesla is of Steel. It is a luxury vehicle? true. Does it have 4 wheel? true