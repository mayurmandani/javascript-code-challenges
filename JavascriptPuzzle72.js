/* copyWithin() copies a part of an array to another position in the same array and returns it without
increasing its length. 

copyWithin(target, start, end)
replace arr with start..end at target
target -> 3 (index)
start -> 1 (index)
end -> 3 (index)  // parameter is optional

start..end -> 2, 3
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = array.copyWithin(0, 5);
console.log(result);