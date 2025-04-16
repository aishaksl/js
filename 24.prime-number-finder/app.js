//PRIME NUMBER FINDER

let num = Number(prompt("Please enter a number"));
let result = true;

for (let i = 2; i <= Math.floor(num / 2); i++) {
  if (num % i == 0) {
    result = false;
    break;
  }
}

if (result) {
  alert(num + " is prime");
} else {
  alert(num + " is not prime");
}
