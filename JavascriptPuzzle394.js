/* Find All Permutations */

function permutations(str) {
  if(str.length <= 1) return [str];
  let result = [];
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    const perms = permutations(str.slice(0, i) + str.slice(i + 1));
    for(let perm of perms) {
      result.push(char + perm);
    }
  }
  return result;
}

console.log(permutations("abc")); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]