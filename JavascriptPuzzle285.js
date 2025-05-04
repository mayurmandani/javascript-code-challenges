/* Create your own polyfill method myReduce 
Find the sum of all the even numbers inside the given array.
*/

const arr = [1, 2, 3, 4, 5, 6];


function callback(ele) {
  if(ele % 2 === 0) {
    return true;
  }
  return false;
}

Array.prototype.myReduce = function (callback, sum) {
  for(const i in this) {
    if(callback(this[i])) {
      sum += this[i];
    }
  }
  return sum;
};

const sum = arr.myReduce(callback, 0);

console.log(sum);  // 12