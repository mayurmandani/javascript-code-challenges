/* What will be the output of the following code? */

const obj = {
   a: "foo",
   b: function () {
    console.log(this.a);
   },
};

const c = obj.b;

obj.b();  // foo
c();  // undefined