// INHERITANCE

/*
  extends → Allows one class to inherit from another.
  super() → Calls the parent constructor to use inherited properties like this.name.
  Override → If the child class defines the same method
             it replaces the parent’s method.
*/

// extends → The Dog class inherits from the Animal class.

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {}
const dog1 = new Dog("Max");
dog1.speak();

// super() → Calls the parent class's constructor to inherit properties like this.name.

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

const cat1 = new Cat("Misty", "gray");
cat1.speak(); // Misty makes a sound.
console.log(`${cat1.name} is ${cat1.color}.`); // Misty is gray.

// override → If the child class defines the same method, it overrides (replaces) the parent method.

class Bird extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} chirps.`);
  }
}

const bird1 = new Bird("Tweety");
bird1.speak();

// => Now, it uses the speak() method defined inside Bird instead of Animal.
