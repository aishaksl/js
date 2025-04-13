let weight = Number(prompt("Please enter your weight"));
let height = Number(prompt("Please enter your height"));

let bmi = weight / height ** 2;

if (bmi < 18.5) {
  console.log("You're underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You have a normal weight.");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are overweight.");
} else if (bmi >= 30 && bmi <= 39.9) {
  console.log("You are obese");
} else {
  console.log("You are morbidly obese.");
}
