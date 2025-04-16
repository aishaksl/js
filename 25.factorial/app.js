//FACTORIAL

let num = Number(prompt("Please enter a number"));
let result = 1;

for (let i = 1; i <= num; i++) {
  result *= i;
}

alert("Result: " + result);
