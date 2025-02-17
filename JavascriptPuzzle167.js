/* module pattern allows you to create reusable and encapsulated code, improving code organization and maintainability. */

const myModule = (function () {
  let privateVariable = 'This is private';

  function privateMethod() {
    console.log(privateVariable);
  }

  return { 
    publicMethod() {
      privateMethod();
    },
  };
})();

myModule.publicMethod(); // This is private