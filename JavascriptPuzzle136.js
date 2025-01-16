/* Design a Calculator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface */

function Calculator(num1, num2) {
  
  function sum() {
    return num1 + num2;
  }

  function difference() {
    return num1 - num2;
  }

  function product() {
    return num1 * num2;
  }

  function dividend() {
    return Math.floor(num1/ num2);
  }

  return { sum, difference, product, dividend };

}

const calculateValue = Calculator(10, 5);

console.log(calculateValue.sum()); // 15
console.log(calculateValue.difference()); // 5
console.log(calculateValue.product()); // 50
console.log(calculateValue.dividend()); // 2