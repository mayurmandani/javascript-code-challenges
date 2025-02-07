/* JIO interview javascript challenges: 
const arr = [
    { "name": "A", "classValue": 5 },
    { "name": "B", "classValue": 6 },
    { "name": "C", "classValue": 6 },
    { "name": "D", "classValue": 5 }
]

output : [
        {"classValue": 5 , names: ["A","D"]},
        {"classValue": 6 , names: ["B","C"]},
*/

const arr= [
  { "name": "A", "classValue": 5 },
  { "name": "B", "classValue": 6 },
  { "name": "C", "classValue": 6 },
  { "name": "D", "classValue": 5 }
];

let output = arr.reduce((result, {name, classValue}) => {
   const className = result.find((item) => item.classValue === classValue);
   if(className) {
    className.names.push(name);
   } else {
    result.push({classValue, names: [name]});
   }
   return result;
}, []);

console.log(output);