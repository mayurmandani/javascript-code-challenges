/* What will be the output of the below code: */

const a = [ 4, 2, 7, 1, 6, 9, 3, 2, 1, 5, 4, 3, 4, 1, 2, 1];

function compressArray(a) {
  return a.reduce((countsMap, item) => countsMap.set(item, countsMap.get(item) + 1 || 1), new Map());
}

console.log(compressArray(a));

/* { 
  4 => 3,
  2 => 3,
  7 => 1,
  1 => 4,
  6 => 1,
  9 => 1,
  3 => 2,
  5 => 1 
} */       