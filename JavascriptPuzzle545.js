// What is the output of the following code?

let data = {
    "Amit" : "TL", "Ravi" : "HR", "Reena" : 'PM', "Mohan" : "TL", "Kapil" : "TL", "Rajesh" : "HR", "Geeta" : "TL"
};

let output = {};

for (let name in data) {
    let job = data[name];

    if(!output[job]){
        output[job] = [];
    }
    output[job].push(name);
}

console.log(output); 

/* 
{ 
'TL': ['Amit', 'Mohan', 'Kapil', 'Geeta'], 
'HR': ['Ravi', 'Rajesh'], 
'PM': ['Reena']
} 
*/