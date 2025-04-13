//AVARAGE CALCULATOR

// midtorm1 %30   midtorm2 %30   final %40

let midtorm1 = Number(prompt("Please enter your Midterm 1 score"));
let midtorm2 = Number(prompt("Please enter your Midterm 2 score"));
let final = Number(prompt("Please enter your Final score"));

let average = midtorm1 * 0.3 + midtorm2 * 0.3 + final * 0.4;

if (average > 60) {
  alert("Congratulations, you passed the course!");
} else {
  alert("Unfortunately, you failed the course.");
}
