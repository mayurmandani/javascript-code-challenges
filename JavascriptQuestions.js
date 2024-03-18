/* What will be the Console Output ? */

const set = new Set();

set.add("a");
set.add("b");
set.add("c");
set.add("b");

set.delete("b");

console.log(set.size);

console.log([...set]);