/* Write a function which will take string and validate Password */

let str = "ffjd98#ERTj";

function checkPassword(str) {
   let newStr = str.replace(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/);
   if(str.length > 8 && newStr) {
    return true;
   } else {
    return `Please Enter at least 8 character for password`;
   }
}

console.log(checkPassword(str));  // true