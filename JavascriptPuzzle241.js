/* What will be the output of the following code & why ? */


class A {
  static get x() { return 1;}
}

class B extends A {
  static x = 2;
  static get y() { return super.x; }
}

console.log(B.x, B.y); // 2 1

/*  
It because any method declared with static keyword would be accessible without object. 
Printing B.x will print 2. B.y is getter method which returns 1 due to inheritance and super keyword. 
Inheritance is used to access properties and methods of parent class. 
Super points to parent object so second value will parent class X getter will call => 1. 
*/