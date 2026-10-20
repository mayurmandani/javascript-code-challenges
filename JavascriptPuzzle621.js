// What is the output of the following code?

const obj = {
    name: "Mayur",
    getName: () => {
        console.log(this.name);
    }
};

obj.getName();  // undefined