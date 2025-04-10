// ASSIGNMENT OPERATORS

/*    
        =   
        ==
        ===
        +=
        -=
        *=
        /=
        %=
*/

// ------>  = assignment operator
// It is used to assign a value to a variable.

let e = 5; //let variable = value

/* note:This operator does not indicate mathematical equality. 
 For example, x = 5 does not mean x is equal to 5 in a mathematical sense;
 it simply means that the value 5 is assigned to x */
//If you want to check for equality, you should use ==  or ===  operators.

// ------>  == Abstract Equality
//Compares values only.
//Tries to convert one or both values to the same type before comparing
5 == "5"; // true
null == undefined;

// ------>  === Strict Equality
// Compares both value and type.
// No type coercion. If the types are different, it returns false.
5 === "5"; // false
5 === 5; // true

// ------>  += Addition Assignment
var x = 5;
x += 3; // x = x+3, so x becomes 8
console.log(x);

// ------>  -= Subtraction Assignment
var x = 5;
x -= 3; // x = x-3, so x becomes 2
console.log(x);

// ------>  *= Multiplication Assignment
var x = 5;
x *= 3; // x = x * 3, so x becomes 15
console.log(x);

// ------>  /= Division Assignment
var x = 5;
x /= 2; // x = x / 2, so x becomes 2.5
console.log(x);

// ------>  %= Modulus Assignment
var x = 5;
x %= 2; // x = x % 2, so x becomes 1
console.log(x);
