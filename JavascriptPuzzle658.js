// What is the output of the following code?

const user = {
    name: "Mayur"
};

const proxy = new Proxy(user, {
    get(target, property) {
        return property in target
            ? target[property]
            : "Not Found";
    }
});

console.log(proxy.name);  // Mayur
console.log(proxy.age);   // Not Found