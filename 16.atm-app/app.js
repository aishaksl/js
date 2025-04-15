let balance = 1000; // Initial balance

const choice = prompt(
  "1: View Balance" +
    "\r\n" +
    "2: Deposit Money" +
    "\r\n" +
    "3: Withdraw Money" +
    "\r\n" +
    "4: Exit+" +
    "\r\n" +
    "Please select an option (1-4)"
);

switch (choice) {
  case "1":
    alert("Your current balance is: " + balance + " TL");
    break;

  case "2":
    let deposit = Number(prompt("Enter the amount to deposit:"));

    balance += deposit;
    alert(deposit + " TL deposited. New balance: " + balance + " TL");

    break;

  case "3":
    let withdraw = Number(prompt("Enter the amount to withdraw:"));

    if (withdraw <= balance) {
      balance -= withdraw;
      alert(withdraw + " TL withdrawn. Remaining balance: " + balance + " TL");
    } else {
      alert("Insufficient balance.");
    }

    break;

  case "4":
    alert("Exiting...");
    break;

  default:
    alert("Invalid selection. Please choose a number between 1 and 4.");
}
