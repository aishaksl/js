// data-types
/*
 1-String : Text values
 2-Number : Numeric values
 3-Boolean : True or False (evet-hayir)
 4- Null : A deliberate non-value //bos (daha sonra veri atanabilir)
 5-Undefined : A variable that has been declared but not assigned a value (deger aciklanmis ama deger verilmemis)
 6-Object : Used for collections of data and more complex entities 
 7-Function : Functions are also objects in js
 */

//Typeof operator is used to check the data type of a value or variable
// typeof (variableName)

// ----- STRING-NUMBER -----

// note: Even if a number is written inside quotes,it’s considered a string in JavaScript
typeof "123"; // "string"
typeof 123; // "number"

let number = 123; //number
console.log(typeof number);

// note: we cant sum strings
let a = "1";
let b = "2";
console.log(a + b); //12

let yourAge = "your age is: ";
let age = 26;
console.log(yourAge + age); //your age is: 26

// ----- BOOLEAN -----

console.log(5 < 8); //true
console.log(5 < 2); //false

let x = 1;
let y = 2;
let sum = x + y;
console.log(sum != 18); //true

// ----- NULL -----

// A deliberate non-value //bos (daha sonra veri atanabilir)

let c = null; //bos
c = 30;
console.log(c);

// ----- UNDEFINED -----

// A variable that has been declared but not assigned a value
// (deger aciklanmis ama deger verilmemis)

let e;
console.log(typeof e);

// ----- OBJECTS -----

let person = {
  name: "Ayse",
  surname: "Temel",
  age: 30,
};

// Arrays (a list of values) are also objects in JavaScript
let numbers = [1, 2, 3];
console.log(typeof numbers); // object

// Functions are also objects in JavaScript
function greet() {
  console.log("Hello!");
}

greet();
console.log(typeof greet); //function
