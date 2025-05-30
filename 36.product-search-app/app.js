let products = [
  {
    name: "Macbook Air M1",
    category: "Technology",
    price: 1234,
  },

  {
    name: "Macbook Air M2",
    category: "Technology",
    price: 1234,
  },

  {
    name: "Macbook Air M3",
    category: "Technology",
    price: 1234,
  },

  {
    name: " Macbook Air M4",
    category: "Technology",
    price: 1234,
  },
];

let filterProduct = [];

let productName = prompt("Please enter a product name");

function getFilterProduct(products) {
  products.forEach(function (product) {
    if (product.name.toUpperCase().includes(productName)) {
      filterProduct.push(product);
    }
  });
}
