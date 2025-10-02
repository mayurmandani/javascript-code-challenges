/* What will be the output of the below code: */

const parent = { role: "admin" };

const child = Object.create(parent);

child.name = "Prem";

console.log(child.role); // admin