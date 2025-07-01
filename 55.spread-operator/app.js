// SPREAD OPERATOR

// 1. SPREAD IN ARRAYS

// Copying an array

const numbers = [1, 2, 3];
const copyNumbers = [...numbers]; //[1, 2, 3]

// Merging arrays

const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2]; //[1, 2, 3, 4]

// Using in function

const add = (a, b, c) => a + b + c;

const nums = [1, 2, 3];

add(...nums); //  add (nums[0],nums[1],nums[2]) old method

// 2. SPREAD IN OBJECTS

// Copying an object
const person = { name: "Alice", age: 25 };
const copyPerson = { ...person };

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedd = { ...obj1, ...obj2 }; // {a:1, b:3, c:4}
// Note: the value of 'b' from obj2 overrides obj1

// 3. SPREAD WITH STRINGS

const greeting = "Hi";
const chars = [...greeting]; // ['H', 'i']
console.log(chars);
