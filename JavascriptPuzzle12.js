

 var ob1 = {
     foo: 1,
     bar: {
         value: 2
     }
 };

 Object.freeze(ob1);

const ob2 = {
     foo : 1,
     bar: {
         value : 2
     }
};

ob1.foo = 4;
console.log(ob1, "ob1.foo"); 
ob2.foo = 4;
console.log(ob2, "ob2.foo");
ob1.bar.value = 4;
console.log(ob1, "ob1.bar.value");
ob2.bar.value = 4;
console.log(ob2, "ob2.bar.value");
ob1.bar = 4;
console.log(ob1, "ob1.bar");
ob2.bar = 4;
console.log(ob2, "ob2.bar");
ob1 = {};
console.log(ob1, "ob1");
// ob2 = {}; // TypeError: Assignment to constant variable.
// console.log(ob2, "ob2");