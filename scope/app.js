/*
  -------- SCOPE -------- 
  -> Global Scope
  -> Function Scope
  -> Block Scope
*/

/* If a variable is declared outside of any function or block 
(suslu parantez ve function disinda), it is in the GLOBAL SCOPE. 
It can be accessed from anywhere in the code */

let name = "Ayşe";

function greet() {
  console.log("Hello " + name);
}

greet();

/*
If a variable is declared inside a function 
it is only accessible within that function. (FUNCTION SCOPE)
*/

function sayHello() {
  let greeting = "Hello";
  console.log(greeting);
}

console.log(greeting); // Error: greeting is not defined

/*
Variables declared with let or const are block-scoped. 
They only exist within the curly braces {} where they were defined.
*/

{
  let age = 25;
  const city = "Ankara";
  // If it were declared with var, it could be accessed from outside the block.
}

console.log(age); // Error
console.log(city); // Error

// note: var is not a block scope. it is a function scope.

function method1() {
  var a = 5; //function scope
  if (true) {
    var b = 10; // block scope
  }
}
