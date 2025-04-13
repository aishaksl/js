// LOGICAL OPERATORS

/*
      && : AND -> Returns true if both conditions are true
      || : OR -> Returns true if at least one condition is true
      !  : NOT -> Reverses the boolean value of a condition.
                 If the condition is true, it returns false, 
                 and if its false, it returns true
 */

// &&
var x = 5;
var y = 10;
console.log(x > 0 && y > 0); // true

// ||
var x = 5;
var y = -10;
console.log(x > 0 || y > 0); // true

// !
var x = 5;
console.log(!(x > 10)); // true, because x > 10 is false
