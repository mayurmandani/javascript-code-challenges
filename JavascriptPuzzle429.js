/* Write a function that takes an array of objects and returns the unique key count value of object

const arr = [{a:"apple", b: "banana", c: "tomato"}, {a:"orange", b: "stobary", c: "car"}, {a: "toy", b: "peg", c: "doll"}];

output = {
  a: {
    a: 3, p: 2, l: 1, e: 2, o: 2, r: 1, n: 1, g: 1, t: 1, y: 1
  },
  b: {
    b: 2, a: 4, n: 2, s: 1, t: 1, o: 1, r: 1, y: 1, p: 1, e: 1, g: 1
  },
  c: {
    t: 2, o: 3, m: 1, a: 2, c: 1, r: 2, d: 1, l: 2
  }
}

*/


const arr = [{a:"apple", b: "banana", c: "tomato"}, {a:"orange", b: "stobary", c: "car"}, {a: "toy", b: "peg", c: "doll"}];

function mergeCountsPerKey(arr) {
   const mergeCounts = {};
   arr.forEach(obj => {
    for(let [key, value] of Object.entries(obj)) {
      if(!mergeCounts[key]) mergeCounts[key] = {};
         for(let char of value) {
          mergeCounts[key][char] = (mergeCounts[key][char] || 0) + 1;
         }
      }
   });
   return mergeCounts;
}

console.log(mergeCountsPerKey(arr));

/* 
{
  a: { a: 2, p: 2, l: 1, e: 2, o: 2, r: 1, n: 1, g: 1, t: 1, y: 1 },
  b: { b: 2, a: 4, n: 2, s: 1, t: 1, o: 1, r: 1, y: 1, p: 1, e: 1, g: 1 },
  c: { t: 2, o: 3, m: 1, a: 2, c: 1, r: 1, d: 1, l: 2 }
}
*/