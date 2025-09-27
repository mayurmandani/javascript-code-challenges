/* Write a function that takes an array of objects and returns the count value of each character

const arr = [{a:"apple", b: "banana", c: "tomato"}, {a:"orange", b: "stobary", c: "car"}, {a: "toy", b: "peg", c: "doll"}];

output = [
  {
    a: { a: 1, p: 2, l: 1, e: 1 },
    b: { b: 1, a: 3, n: 2 },
    c: { t: 2, o: 2, m: 1, a: 1 }
  },
  {
    a: { o: 1, r: 1, a: 1, n: 1, g: 1, e: 1 },
    b: { s: 1, t: 1, o: 1, b: 1, a: 1, r: 1, y: 1 },
    c: { c: 1, a: 1, r: 1 }
  },
  {
    a: { t: 1, o: 1, y: 1 },
    b: { p: 1, e: 1, g: 1 },
    c: { d: 1, o: 1, l: 2 }
  }
]

*/


const arr = [{a:"apple", b: "banana", c: "tomato"}, {a:"orange", b: "stobary", c: "car"}, {a: "toy", b: "peg", c: "doll"}];

function countCharsPerKey(arr) {
  return arr.map(obj => {
    const keyCounts= {};
    for(let [key, value] of Object.entries(obj)) {
      charCount = {};
      for(let char of value) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
      keyCounts[key] = charCount;
    }
    return keyCounts;
  });
}

console.log(countCharsPerKey(arr));

/* 
[
  {
    a: { a: 1, p: 2, l: 1, e: 1 },
    b: { b: 1, a: 3, n: 2 },
    c: { t: 2, o: 2, m: 1, a: 1 }
  },
  {
    a: { o: 1, r: 1, a: 1, n: 1, g: 1, e: 1 },
    b: { s: 1, t: 1, o: 1, b: 1, a: 1, r: 1, y: 1 },
    c: { c: 1, a: 1, r: 1 }
  },
  {
    a: { t: 1, o: 1, y: 1 },
    b: { p: 1, e: 1, g: 1 },
    c: { d: 1, o: 1, l: 2 }
  }
]
*/