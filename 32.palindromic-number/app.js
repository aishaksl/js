let number = prompt("Please enter a number");

function isPalindromic(number) {
  let reverse = "";

  for (let i = number.length - 1; i >= 0; i--) {
    reverse += number.charAt(i);
  }

  if (number == reverse) {
    alert(number + " is palindromic");
  } else {
    alert(number + " is not palindromic");
  }
}

isPalindromic(number);
