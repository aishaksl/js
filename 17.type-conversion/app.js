//TYPE CONVERSION

/*
     string, number, boolean, undefined, null
     object,function
 */

// JavaScript automatically converts types when necessary.

console.log("5" + 3); // "53" (number 3 is converted to string)
console.log("5" - 3); // 2 (string '5' is converted to number)
console.log(true + 1); // 2 (true is converted to 1)

// How to convert a String to a Number
/*
    Number()
    parseInt() for integers
	parseFloat() for decimal numbers
*/

let str = "123.45";

let num1 = Number(str);
let num2 = parseInt(str);
let num3 = parseFloat(str);

console.log("Number():", num1); // 123.45
console.log("parseInt():", num2); // 123
console.log("parseFloat():", num3); // 123.45

// note:  NaN(Not a Number): NaN is produced when you perform an operation that doesn’t yield a valid number.
let invalidConversion = Number("abc"); // results in NaN
console.log(invalidConversion);
let invalidConversion2 = Number("[1,2,3,4]"); // results in NaN. Its not a number. Its an array
console.log(invalidConversion2);
let invalidOperation = 0 / 0; // also results in NaN
console.log(invalidOperation);

// How to convert a Number to a String
/*
    String()
    .toString()
*/

let num = 100;

let str1 = String(num);
let str2 = num.toString();

console.log("String():", str1); // "100"
console.log("toString():", str2); // "100"
