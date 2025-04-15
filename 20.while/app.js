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

var i = 0;
while (i < 10) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

//while(true)

/*
  while (true) {
  console.log("This will run forever...");
}
*/

/*
    This loop will keep printing that line forever, unless you stop it with:
	   a break statement,
	   a return (in a function),
*/

var i = 0;

while (true) {
  console.log(i);
  i++;
  if (i === 7) {
    break; // exit the loop when i reaches 7
  }
}
