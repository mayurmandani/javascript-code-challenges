/* Write a JavaScript countFruits function that will take an array = ['apple', 'mango', 'guava', 'apple', 'apple', 'guava'] 

and return output as array ['apple_3', 'mango_1', 'guava_2'] */

const arr = ['apple', 'mango', 'guava', 'apple', 'apple', 'guava']; 

function countFruits(arr) {
  const map = {};

  // Count occurrences
  for(const item of arr) {
    map[item] = (map[item] || 0) + 1;
  }

  // Convert to required output format
  return Object.entries(map).map(([key, value]) => `${key}_${value}`);

}

const output = countFruits(arr);

console.log(output);