/* Find element that occurs once only */

let data = [12, 1, 12, 13, 3, 12, 1, 1, 2, 3, 3];

let result = data.filter((v) => {
        // filter out only elements where both last index and first index are the same.
      return data.indexOf(v) == data.lastIndexOf(v);
});

console.log(result); // [ 13, 2 ]