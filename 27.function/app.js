//FUNCTION

// Function Declaration: A standart way to define a function

function greet() {
  console.log("Hello!");
}

greet(); // Output: Hello!

// Function Expression: Assigning a function to a variable

const greeting = function () {
  console.log("Hello!");
};

greeting(); // Output: Hello!

// Function with Parameters

function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("Alice"); // Output: Hello, Alice

// Return Values: Functions can return a value using the return keyword
// The return statement is used to send a value out of a function.
//Once return runs, the function stops. Any code after it is ignored.

function multiply(x, y) {
  return x * y;
}

let result = multiply(5, 6);
console.log(result); // Output: 30
