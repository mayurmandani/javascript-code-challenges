const person = {
    name: "Nitin",
    age: 32,
}

//  1 Using for ... in loop
for (let prop in person) {
    console.log(prop + ": " + person[prop]);
}

// 2 Using Object.keys() and forEach()
Object.keys(person).forEach((prop) => {
            console.log(prop + ": " + person[prop]);
});

// 3 Using Object.values() and ForEach()
Object.values(person).forEach((value) => {
    console.log(value);
});