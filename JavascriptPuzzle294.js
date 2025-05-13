/* What will be the output of the below code: */

const obj = {
  name: "Conner",
  age: 27,
  greet: () => {
	console.log(`Hey, my name is ${this.name}`);
  },
};
obj.greet(); 

// Hey, my name is undefined