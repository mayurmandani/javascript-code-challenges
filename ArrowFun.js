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
