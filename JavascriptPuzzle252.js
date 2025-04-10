/* Write a JavaScript program to create a clock. */

function myClock() {
  this.current_date = new Date();
  this.hours = this.current_date.getHours();
  this.minutes = this.current_date.getMinutes();
  this.seconds = this.current_date.getSeconds();
}

myClock.prototype.run = function () {
  setInterval(this.update.bind(this), 1000);
};

myClock.prototype.update = function () {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

myClock.prototype.updateTime = function (secs) {
  this.seconds += secs;
  if(this.seconds >= 60) {
    this.minutes++;
    this.seconds = 0;
  }
  if(this.minutes >= 60) {
    this.hours++;
    this.minutes = 0;
  }
  if(this.hours >= 24) {
    this.hours = 0;
  }
};

let clock = new myClock();

clock.run();