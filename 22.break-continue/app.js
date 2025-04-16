// BREAK - CONTINUE

// Break: The break statement completely stops a loop. When break is executed, the loop ends immediately and the program continues with the next statement after the loop.
// Donguyu tamamen kirar

var i = 0;

while (i <= 10) {
  console.log(i);
  if (i == 5) {
    break;
  }
  i++;
}

// Continue: The continue statement skips the current loop iteration and jumps to the next one. It doesn’t stop the whole loop, just that specific cycle.
// Donguyu 1 kez kirar

var i = 0;

while (i <= 10) {
  i++;
  if (i == 5) {
    continue;
  }
  console.log(i);
}
