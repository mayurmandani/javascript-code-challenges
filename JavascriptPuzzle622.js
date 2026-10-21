// What is the output of the following code?

const obj = {
    name: "Mayur",
    getName: function () {
        console.log(this.name);
    }
};

obj.getName();  // Mayur