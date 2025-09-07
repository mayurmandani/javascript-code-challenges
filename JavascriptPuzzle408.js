/* What will be the output of the below code: */

const person = {
   firstName: "John",
   lastName: "Doe",
   fullName: function () {
    return this.firstName + " " + this.lastName;
   }
}

const getFullName = person.fullName.bind(person);

console.log(getFullName()); // John Doe