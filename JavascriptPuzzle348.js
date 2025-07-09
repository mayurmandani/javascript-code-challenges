/* What will be the output of the below code: */

function fun() {
  setTimeout(function() {
    console.log("::value of name", this.name);
  }, 0);
}

fun.call({name:"paritosh"}); // ::value of name undefined