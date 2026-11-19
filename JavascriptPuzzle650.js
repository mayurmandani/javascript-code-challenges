// What is the output of the following code?

const user1 = {
    name: "John"
};

const user2 = {
    name: "David"
};

function getName() {
    console.log(this.name);
}

const result = getName.bind(user1);

result.call(user2);  // John