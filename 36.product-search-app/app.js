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
    name: "Macbook Pro M3",
    category: "Technology",
    price: 1234,
  },

  {
    name: "Macbook Pro M4",
    category: "Technology",
    price: 1234,
  },
];

let filterProduct = [];

let productName = prompt("Please enter a product name");

function getFilterProduct(products) {
  products.forEach(function (product) {
    if (product.name.toUpperCase().includes(productName.toUpperCase())) {
      filterProduct.push(product);
    }
  });
}

function printFilterProduct(products) {
  products.forEach(function (product) {
    console.log(
      "|" + product.name + "|" + product.category + "|" + product.price
    );
    console.log("---------------------------------");
  });
}

getFilterProduct(products);
printFilterProduct(filterProduct);
