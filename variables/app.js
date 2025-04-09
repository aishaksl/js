// var - let - const

//var:function scope
/*  A variable declared with var behaves like it has block scope, 
but it actually works within function scope. 
This means that even if it’s defined inside a block like an if statement or a for loop,
it will still be valid throughout the entire function */

function sayHello() {
  var greeting = "Hello";
  if (true) {
    var b = 10;
    console.log(b);
  }
  console.log(b);
}

sayHello();

//let-const: block scope
function sayHello() {
  var greeting = "Hello";
  if (true) {
    let b = 10;
    console.log(b);
  }
  // console.log(b);  ERROR
}

sayHello();

//NOTE

// var
// we can redeclare the same variable
var name = "Aisha";
var name = "Furkan";

// let
// we cannot redeclare the same variable within the same block.
let age = 25;
//let age = 28; // ERROR
// However, we can reassign a new value to that variable.
age = 9;
console.log(age);

// const
// the value cannot be reassigned after its declared
const birthYear = 1994;
// birthYear = 2000 // ERROR

//const with objects
const person = {
  name: "John",
  age: 30,
};

// You can modify the properties of the object
person.age = 31;
person.name = "Jane";

console.log(person);

// But you cannot reassign the entire object
// person = { name: "Mike", age: 25 }; // ERROR;
