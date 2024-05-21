/* Polymorphism allows objects of different classes to be treated as objects of a common superclass.
It enables dynamic method invocation and code flexibility. */

class Animal {
    makeSound() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Cat meows')
    }
}

function animalMakesSound(animal) {
    animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

animalMakesSound(dog);
animalMakesSound(cat);
