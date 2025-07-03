// STATIC

/*
    The `static` keyword defines a method or property that belongs to the CLASS itself, not to INSTANCES.
    You call it with ClassName.method() instead of object.method().
*/

class MyClass {
  static sayHello() {
    console.log(" Hello from static method!");
  }
}

MyClass.sayHello();
const obj = new MyClass(); // If you try using an instance, it will fail:
// obj.sayHello(); // Error: obj.sayHello is not a function

// STATIC PROPERTY
// You can define static properties directly inside a class.

class Car {
  static numberOfWheels = 4; // belongs to the class

  static showWheels() {
    console.log(`Cars have ${Car.numberOfWheels} wheels.`);
  }
}

console.log(Car.numberOfWheels); // 4
Car.showWheels(); // Cars have 4 wheels.

// STATIC vs INSTANCE METHODS

class Dog {
  static bark() {
    console.log("Static bark: Woof!");
  }

  sayHello() {
    console.log("Instance hello: Woof woof!");
  }
}

Dog.bark(); // Works
const dog1 = new Dog();
dog1.sayHello(); // Works
// dog1.bark(); // Error: dog1.bark is not a function

// STATIC INHERITANCE
// Static methods and properties are inherited by child classes.

class Parent {
  static staticMethod() {
    console.log("Parent static method");
  }
}

class Child extends Parent {}

Child.staticMethod(); // Parent static method
