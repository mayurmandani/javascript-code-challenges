/* Write a recursive function that will check each nested object for an even number and return a final sum of those numbers */

function nestedEvenSum(obj) {
  let sum = 0;
  for(const k in obj) {
    if(obj[k].constructor === Object) {
       sum += nestedEvenSum(obj[k]);
    } else if(typeof obj[k] === 'number' && obj[k] % 2 === 0) {
       sum += obj[k];
    }
  }
  return sum;
}

const obj = {
  a: 2,
  c: {
    c: {
      c: 2
    },
    cc: 'b',
    ccc: 5
  },
  e: {
    e: {
      e: 2
    },
    ee: 'car'
  }
};

console.log(nestedEvenSum(obj));  // 6