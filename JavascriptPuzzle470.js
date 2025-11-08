/* To group an array of objects by a specific key in JavaScript, We can use Object.groupBy() */

const cars = [
  { name: "audi", model: "r8", year: "2012"},
  { name: "audi", model: "rs5", year: "2013"},
  { name: "ford", model: "mustang", year: "2012"},
  { name: "ford", model: "fusion", year: "2015"},
  { name: "kia", model: "optima", year: "2012"},
];

const groupByMake = Object.groupBy(cars, car => car.name);

console.log(groupByMake);

/* 
{
  audi: [
    { name: 'audi', model: 'r8', year: '2012' },
    { name: 'audi', model: 'rs5', year: '2013' }
  ],
  ford: [
    { name: 'ford', model: 'mustang', year: '2012' },    
    { name: 'ford', model: 'fusion', year: '2015' }      
  ],
  kia: [ { name: 'kia', model: 'optima', year: '2012' } ]
}

*/