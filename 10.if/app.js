// if
// if - else
// if - else if - else

// IF
/* if (condition) {
  // code runs if the condition is true
}*/

var age = 20;

if (age > 18) {
  console.log("You are an adult.");
}

// IF - ELSE
/* if (condition) {
  // code runs if the condition is true
} else {
  // code runs if the condition is false
}*/

var age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}

// IF - ELSE IF - ELSE
/* if (condition1) {
    // code if condition1 is true
  } else if (condition2) {
    // code if condition2 is true
  } else {
    // code if none of the conditions are true
  }*/

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}
