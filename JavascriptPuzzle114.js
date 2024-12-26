/* Create an object 'obj' with functions assigned to keys. Show how can we achieve 'obj.func1().func2().func3()' considering func1, func2, func3 are object keys */

var obj = {
    id: 1,
    username: "Mayur",
    dept: "Computers",

    displayId() {
        console.log("Id :" + this.id);
        return this;
    },

    displayName() {
        console.log("Name: " + this.username);
        return this;
    },

    displayDept() {
        if (typeof dept !== "undefined") {
            this.dept = dept;
        }
        console.log("Dept: " + this.dept);
        return this;
    },
};

obj.displayId().displayName().displayDept("Info Tech");