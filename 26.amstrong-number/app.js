// AMSTRONG NUMBER

let num = prompt("Please enter a number");
let sum = 0;
let n = num.length;

for (i = 0; i <= num.length; i++) {
  sum += num.charAt(i) ** n;
}

if (sum == num) {
  alert(num + " is amstrong number");
} else {
  alert(num + " is not amstrong number");
}
