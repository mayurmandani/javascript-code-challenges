/* What will be the output of this code ? */

function mysteryFunction(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result += (a[i] % 2 === 0) ? a[i] : 0;
    }
    return result;
  }
  
  console.log(mysteryFunction([1, 2, 3, 4, 5])); // 6