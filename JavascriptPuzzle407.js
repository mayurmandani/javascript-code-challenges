/* convert input [
  { name: 'Apple', type: 'fruit' },
  { name: 'Carrot', type: 'vegetable' },
  { name: 'Banana', type: 'fruit' }
] to output as  { fruit: ['Apple', 'Banana'], vegetable: ['Carrot'] } */

const products = [
  { name: 'Apple', type:'fruit'},
  { name: 'Carrot', type: 'vegetable' },
  { name: 'Banana', type: 'fruit' }
];

const grouped = products.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});

console.log(grouped); // { fruit: [ 'Apple', 'Banana' ], vegetable: [ 'Carrot' ] }