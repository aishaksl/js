// MATH METHODS

/*
  Math.abs(x)         : Returns the absolute value of x (mutlak değer)
  Math.round(x)       : Rounds x to the nearest integer 
  Math.floor(x)       : Rounds x down to the nearest integer 
  Math.ceil(x)        : Rounds x up to the nearest integer 

  Math.pow(x, y)      : Returns x to the power of y (üs alma)
  Math.sqrt(x)        : Returns the square root of x (karekök)

  Math.max(...nums)   : Returns the largest number 
  Math.min(...nums)   : Returns the smallest number 

  Math.random()       : Returns a random number between 0 (inclusive) and 1 (exclusive)
  Math.floor(Math.random() * n) : 0 ile n-1 arasında rastgele tam sayı

  Math.PI             : Returns the value of π (3.14159...)
  Math.E              : Returns Euler's number e (2.718...)

*/

let x = -7.4;

console.log(Math.abs(x)); // 7.4
console.log(Math.round(x)); // -7
console.log(Math.floor(x)); // -8
console.log(Math.ceil(x)); // -7

console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(25)); // 5

console.log(Math.max(3, 8, 1, 20)); // 20
console.log(Math.min(3, 8, 1, 20)); // 1

console.log(Math.random()); // örnek: 0.453123
console.log(Math.floor(Math.random() * 10)); // 0–9 arasında bir sayı

console.log(Math.PI); // 3.141592...
console.log(Math.E); // 2.718281...

// NOTE:
// Math methods are static and always used as Math.methodName()
// They do not require a number or variable to be created before using them.
