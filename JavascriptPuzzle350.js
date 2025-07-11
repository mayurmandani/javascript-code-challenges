/* What will be the output of the below code: */

var obj1 = {
  name: "paritosh",
  fun1: () => {
    console.log(":: name -> fun1", this.name);
  },
  fun2: () => {
    console.log(":: name -> fun2", this.name);
  }
}

obj1.fun1(); // :: name -> fun1 undefined
obj1.fun2(); // :: name -> fun1 undefined