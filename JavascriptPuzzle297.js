/* What will be the output of the below code: */

const testArray = [1, 2, 3, 4, 5];
const res = testArray.reduce((acc, curr) => {
  if (curr % 2 === 0) {
	return acc + curr;
  }
  return acc;
}, 0);
console.log(res);  // 6