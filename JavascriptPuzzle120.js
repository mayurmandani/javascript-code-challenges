/* Write a singleton function to create an object only once */

// Singleton is a design pattern which restricts the creation of only one object from a given interface
// When requested multiple times, same object is returned.

var Singleton = (function () {
  var instance;

  function createInstance(){
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
console.log(instance1);
const instance2 = Singleton.getInstance();
console.log(instance2);