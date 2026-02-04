/* When we click a button on a webpage, the browser automatically binds this to the button element itself.
Rule of Thumb: dealing with HTML elements - Use a regular function.

*/

const button = document.querySelector('button');

button.addEventListener('click', function() {
      // 'this' is the HTML element that was clicked
      console.log("You clicked:", this);

      // We can easily change its text
      this.innerText = "Clicked!";
});