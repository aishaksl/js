// TEMPLATE LITERALS

/* 
   Template literals are a way to create strings in JavaScript.
   They use backticks (`) instead of single (’’) or double (””) quotes.
   They allow you to insert variables and expressions inside strings easily using ${}.
   They support multi-line strings without needing \n.
*/

// 1. Basic Usage

const name = "Alice";
const greeting = `Hello ${name}!`;
console.log(greeting);

// 2. Multi-line Strings

const message = `This line 1
This line 2
This line 3`;

console.log(message);

// Expression Interpolation

const a = 10;
const b = 5;

console.log(`The sum of ${a} and ${b} is ${a + b}`);
