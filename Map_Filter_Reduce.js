const users = [
    {firstName: 'mayur', lastName: 'mandani', age: 30},
    {firstName: 'donald', lastName: 'trump', age: 75},
    {firstName: 'elon', lastName: 'musk', age: 50},
    {firstName: 'akshay', lastName: 'kumar', age: 30},
];

// make list of full names ["mayur mandani", "donald trump", "elon musk", "akshay kumar"]

const listOfFullNames = users.map((x) => x.firstName + " " + x.lastName);

console.log(listOfFullNames);

// acc = {30: 2, 50: 1, 75: 1}

const output = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]; 
    }
    else {
        acc[curr.age] = 1
    }
    return acc;
}, {});


console.log(output);

// filter array age which value is less than 35 and return their firstName 

const filterValue = users.filter((x) => x.age < 35).map((x) => x.firstName);

console.log(filterValue);