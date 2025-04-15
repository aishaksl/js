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

//  even numbers from 0 to 10
for (var i = 0; i < 10; i += 2) {
  console.log(i);
}

// odd numbers from 1 to 10
for (var i = 1; i < 10; i += 2) {
  console.log(i);
}

//
for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("Aisha");
  } else {
    console.log("Furkan");
  }
}

//
let sum = 0;
for (let i = 50; i >= 1; i--) {
  console.log(i);
  sum += i;
}
console.log(sum);
