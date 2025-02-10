const input = [{ id: 1, name: "orange", category: "fruits" }, 
  { id: 2, name: "apple", category: "fruits" }, 
  { id: 3, name: "carrot", category: "vegetable" }],

  output = {};
    
  input.forEach(({ id, name, category }) => {
  output[category] = output[category] || [];
  output[category].push({ id, name });
});

console.log(output);