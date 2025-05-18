/* Analyze the below code snippet and advise what will be the output: */

const person = {
  firstName: "Helen",
  lastName: "Ryan",
  getFullName: function () {
	return this.firstName + " " + this.lastName;
  },
};
console.log(person.getFullName());