// DO-WHILE

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

//Sum of odd numbers from 1 to 20
var i = 1;
let sum = 0;
do {
  if (i % 2 == 1) {
    sum += i;
  }
  i++;
} while (i <= 20);

console.log(sum);
