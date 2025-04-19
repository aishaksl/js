// LOOPS

/*
     1-for: Used when you know how many times you want to repeat something.
     2-while: Repeats while a condition is true.
     3-do-while: Runs the block at least once, then checks the condition.
     4-forEach: It runs a function once for each element in the ARRAY.
*/

//FOR

/*
  for (initialization; condition; increment / decrement) {
  // code to run each time
}
*/

for (var i = 0; i < 5; i++) {
  console.log(i);
}
/* 
     Start with i = 0
     Check condition: i < 5 → true
     Run the block: console.log(i)
     Do i++
     Repeat until condition is false
  */

//WHILE

/*
  while (condition) {
  // code to run as long as the condition is true
}
  */

var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

/*
    It starts with i = 0.
    The condition i < 5 is checked before each loop.
    If the condition is true, the code inside the loop runs.
    It prints the value of i, then increases i by 1 (i++).
    When i reaches 5, the condition becomes false, so the loop stops.
*/

// DO - WHILE;

/*
  do {
     // code to run
  } while (condition);
*/

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

/*
    It starts with i = 0
    First, it runs console.log(i) and prints 0
    Then it increases i by 1
    Then it checks if i < 5
    If true, it repeats; if false, it stops
*/

// FOREACH
let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  console.log(color);
});
