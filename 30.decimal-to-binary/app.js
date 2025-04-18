let decimal = Number(prompt("Please enter a number"));

function decimalToBinary(decimal) {
  if (decimal === 0) return "0";

  let binary = "";

  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

alert(decimalToBinary(decimal));
