// LOOPS

/*
     1-for: Used when you know how many times you want to repeat something.
     2-while: Repeats while a condition is true.
     3-do-while: Runs the block at least once, then checks the condition.
     4-forEach: It runs a function once for each element in the ARRAY.
*/

//FOR

for (initialization; condition; increment / decrement) {
  // code to run each time
}

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
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// DO - WHILE;
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// FOREACH
let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  console.log(color);
});
