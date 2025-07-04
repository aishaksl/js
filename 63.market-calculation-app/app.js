const products = [
  {
    productName: "Milk",
    price: "3",
  },
  {
    productName: "Meat",
    price: "40",
  },
  {
    productName: "Chicken",
    price: "30",
  },
];

let hasCard = confirm(`Welcome to market place
Do you have card?
1 - Yes
2 - No`);

let totalAmountDue;

if (hasCard) {
  let firstName = prompt("Please enter your name");
  let lastName = prompt("Please enter your Surname");

  const customer = new Customer(firstName, lastName, hasCard, products);
  let totalAmountDue = customer.calculate();

  alert(
    `Customer ${firstName} ${lastName}
Total Amount Due: ${totalAmountDue}`
  );
} else {
  const custumer = (null, null, hasCard, products);
  let totalAmountDue = customer.calculate();

  alert(`Total Amount Due: ${totalAmountDue}`);
}
