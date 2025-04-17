let text = "I am currently taking a JavaScript course.";
let letter = prompt(text + "\r\n" + "Select a letter");

function find(letter) {
  let sum = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == letter) {
      sum += 1;
    }
  }
  return sum;
}

let result = find(letter);
alert(result);
