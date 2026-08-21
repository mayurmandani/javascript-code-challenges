/* ECMAScript 2025 features */

const frontendSkills = new Set(['React', 'Vue', 'Svelte']);
const backendSkills  = new Set(['Node', 'Django', 'Vue']);

const uniqueValue = frontendSkills.intersection(backendSkills);

console.log(uniqueValue); // Set(1) { 'Vue' }

const union = frontendSkills.union(backendSkills);

console.log(union); // Set(5) { 'React', 'Vue', 'Svelte', 'Node', 'Django' }

const difference = frontendSkills.difference(backendSkills);

console.log(difference);  // Set(2) { 'React', 'Svelte' }