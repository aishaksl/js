let text =
  "1-Monday" +
  "\r\n" +
  "2-Tuesday" +
  "\r\n" +
  "3-Wednesday" +
  "\r\n" +
  "4-Thursday" +
  "\r\n" +
  "5-Friday" +
  "\r\n" +
  "6-Saturday" +
  "\r\n" +
  "7-Sunday" +
  "\r\n" +
  "Please make a selection";

let selectedValue = prompt(text);

switch (selectedValue) {
  case "1":
    console.log("Monday");
    break;
  case "2":
    console.log("Tuesday");
    break;
  case "3":
    console.log("Wednesday");
    break;
  case "4":
    console.log("Thursday");
    break;
  case "5":
    console.log(Friday);
    break;
  case "6":
    console.log("Saturday");
    break;
  case "7":
    console.log("Sunday");
    break;
  default:
    console.log("Please enter a value");
}
