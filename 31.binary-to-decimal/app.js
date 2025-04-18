let binary = prompt(
  "Please enter a binary number(It should include only 0 and 1)"
);

function binaryToDecimal(binary) {
  if (binary === 0) return "0";

  let decimal = 0;
  let expo = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    decimal += Number(binary.charAt(i)) * Math.pow(2, expo);
    expo++;
  }
  return decimal;
}

alert(binaryToDecimal(binary));
