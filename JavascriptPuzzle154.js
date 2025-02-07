/* collect the unique value from the array of object */

const employee=[{id:1,name:"Hi",age:28},
  {id:1,name:"KO",age:20},
  {id:2,name:"KO",age:20}];

 
 const output = employee.filter((a, i) => employee.findIndex((s) => a.id === s.id) === i);

 console.log(output);