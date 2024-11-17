/* Write the function add, it take parameter as string incase of add("") it will be return 0
incase of add("100, 1") it will be sum of number 101
incase of add("-1, -2, -3") it will be throw error and not allow negative numbers */

function add(str) {
  if(str === "") {
    return 0;
  }
  let newArr = str.split(",");
  let sum = 0;
  for(let i = 0 ; i < newArr.length; i++) {
      if(Number(newArr[i]) < 0) {
          throw new Error("Not allow negative number");
      }
      sum += Number(newArr[i])
  }
  return sum;
}

console.log(add(""));
console.log(add("100, 1"));
console.log(add("-1", "-2", "-3"));






  