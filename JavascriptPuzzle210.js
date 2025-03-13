const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];


function myCallback({quantity}) {
  return quantity > 5 ? "ok" : "restock";
}


const output = Object.groupBy(inventory, myCallback);

console.log(output);

const result = Object.groupBy(inventory, ({type}) => type);

console.log(result);