/* bind allows you to borrow a method and set the value of this without calling the function. It simply returns an exact copy of the function with new value of this. 
You can reuse the same function with new value of this without harming the old one.*/

let mayur =  {
  name: "Mayur Mandani",
  total: 4000,
  deductMonthlyFee: function(fee) {
    this.total = this.total - fee;
    return this.name + ' remaining balance is ' + this.total;
  }
}

let userFeeDeductor = mayur.deductMonthlyFee.bind(mayur, 200);

console.log(userFeeDeductor()); // Mayur Mandani remaining balance is 3800