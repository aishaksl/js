let num = Number(prompt("Please enter a number"));

function find(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum == num) {
    alert(num + " is perfect");
  } else {
    alert(num + " is not perfect");
  }
}

find(num);
