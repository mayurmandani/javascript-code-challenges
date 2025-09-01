/* Write a method on instance of a date which will give you next day as output: Tue Sept 02 2025 */

Date.prototype.nextDay = function() {
  let currentDate = this.getDate();
  return new Date(this.setDate(currentDate + 1)).toDateString();
}

let date  = new Date();

console.log(date.nextDay()); // Tue Sep 02 2025