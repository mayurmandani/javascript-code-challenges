let data = {"Amit" : "TL", "Ravi" : "HR", "Reena" : 'PM', "Mohan" : "TL", "Kapil" : "TL", "Rajesh" : "HR", "Geeta" : "TL"}
// expected output = { HR: ["Ravi", "Rajesh"], PM: ["Reena"], TL: ["Amit", "Mohan", "Kapil", "Geeta"] }

let output = {};

for(let name in data) {
    let job = data[name];
    if(!output[job]) {
        output[job] = [];
    }
    output[job].push(name);
}

console.log(output);

