// Call stack + Memory Heap

// CallStack store the variable.
// Memory Heap store the complex object and functions

const number = 610; // allocate memory for number
const string = 'Mayur'; // allocate memory for a string
const human = { // allocate memory for an object.... and it's values
    first: 'Mayur',
    last: 'Mandani'
}

function subjectTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subjectTwo(sumTotal);
}

console.log(calculate());

