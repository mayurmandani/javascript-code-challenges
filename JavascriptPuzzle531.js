/* Write a function in JavaScript that generates a random hexadecimal color code. */

function getRandomColor() {
   const hexChars = "0123456789ABCDEF";
   let color = "#";
   for (let i = 0; i < 6; i++) {
    color +=hexChars[Math.floor(Math.random() * 16)];
   }
   return color;
}

console.log(getRandomColor());

/* 
#711B75
#50181A
#BAC566
#0F88EC
#8FC495
*/