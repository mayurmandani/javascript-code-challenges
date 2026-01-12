// What is the output of the following code?

const products = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.99 },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.99 },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.49 },
    { id: 4, name: 'Orange', category: 'Fruit', price: 1.49 },
    { id: 5, name: 'Broccoli', category: 'Vegetable', price: 1.29 }
  ];
  
  const result = products.filter((arr) => {
      if(arr.category == 'Fruit' && arr.price > 1) {
      return arr;
      }
  });

  console.log(result);

/* 
[
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.99 },
  { id: 4, name: 'Orange', category: 'Fruit', price: 1.49 }
] 
*/