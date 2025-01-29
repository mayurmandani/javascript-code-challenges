/* Polymorphism allows objects of different classes to be treated as objects of a common superclass. */

class Animal {
  speak() {
    console.log('Animal speaks');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Meow');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Woof');
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

makeAnimalSpeak(new Cat());
makeAnimalSpeak(new Dog());