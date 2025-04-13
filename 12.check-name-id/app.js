let name = prompt("Please enter your name");
let id = prompt("Please enter your id");

// check(name, id);
check2(name, id);

function check(name, id) {
  if (name == "") {
    console.log("Please do not leave the name field empty.");
  } else {
    if (id.length !== 11) {
      console.log("Please enter the ID number as 11 characters.");
    } else {
      console.log("Both the name and ID were entered correctly.");
    }
  }
}

function check2(name, id) {
  if (name == "") {
    console.log("Please do not leave the name field empty.");
    return;
  }
  if (id.length != 11) {
    console.log("Please enter the ID number as 11 characters.");
    return;
  }

  console.log("Both the name and ID were entered correctly.");
}
