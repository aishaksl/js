// OBJECT ORIENTED PROGRAMMING (OOP)

/*
   OOP organizes your code around objects that have properties and methods.
   It helps you write reusable, readable, and maintainable code
*/

// Object Literal

const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};
person.greet();

// Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("Bob", 25);
person1.greet();

// ** ES6 Class **
/*
     class className {
       constructor() {}
     }
*/

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

const person2 = new PersonClass("Charlie", 28);
person2.greet();
