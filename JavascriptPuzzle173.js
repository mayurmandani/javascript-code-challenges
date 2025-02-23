/* Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference. 

const input = [{name: "John", age: 13},{name: "Mark", age: 56},{name: "Rachel", age: 45},{name: "Nate", age: 67},{name: "Jennifer", age: 65}];

output = [13, 67, 54];
*/

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const ages = input.map((person) => person.age);

const output = [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

console.log(output);