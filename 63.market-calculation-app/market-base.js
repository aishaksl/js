class MarketBase {
  constructor(firstName, lastName, hasCard, products) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasCard = hasCard;
    this.products = products;
  }

  calculate() {
    let totalAmountDue = 0;
    let discountRate = 20;

    if (this.products != null && this.products.length > 0) {
      if (this.hasCard) {
        this.products.forEach((product) => {
          totalAmountDue += product.price * ((100 - discountRate) / 100);
        });
      } else {
        this.products.forEach((product) => (totalAmountDue += product.price));
      }
    } else {
      alert("You must buy at least one product.");
    }
    return totalAmountDue;
  }
}
