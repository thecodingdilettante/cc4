// Coding Challenge 4

let stocks = [
    {category: "apparel", name: "shirt", price: 25.00, inventory: 18},
    {category: "groceries", name: "cauliflower", price: 5.50, inventory: 12},
    {category: "electronics", name: "calculator watch", price: 50.99, inventory: 30},
    {category: "household", name: "chair", price: 35.50, inventory: 40},
    {category: "hobbies", name: "video game", price: 8.00, inventory: 8},
  ];

console.log("---- Part 2: Products Without Discount ----");
stocks.forEach((obj, index) => console.log(`${index} | ${obj.category} | ${obj.name} | \$${obj.price.toFixed(2)} | ${obj.inventory}`));

//Discount loop by category
for (let stock of stocks) {

  switch (stock.category) {
  case "electronics":
    stock.price *= .8;  // 20% off electronics
    break;

  case "apparel":
    stock.price *= .85;  // 15% off apparel
      break;

  case "groceries":
  case "household":
    stock.price *= .90;  // 10% off groceries, household
      break;

  default:
    stock.price *= 1;
    break;
}
};

//Initialize customer list

let customers = [
  {customerName: "A", customerType: "regular", cart: ["shirt", "shirt", "cauliflower"]},

  {customerName: "B", customerType: "student", cart: ["chair", "video game", "video game"]},

  {customerName: "C", customerType: "senior", cart: ["cauliflower", "calculator watch"]},
];

//Discount by customer

let customerType = "regular";

if (customerType === "student") {
  customerDiscount = .05;
}

else if (customerType === "senior") {
  customerDiscount = .07;
}

else {
  customerDiscount = 0;
};

//Simulate purchases
console.log("\n---- Part 5: Simulate 3 Customers Purchases ----");

for (let customer of customers) {
  customers++;
  let subtotal = 0;

if (customer.customerType === "student") {
  customerDiscount = .05;
}

else if (customer.customerType === "senior") {
  customerDiscount = .07;
}

else {
  customerDiscount = 0;
};

for (let customerCart of customer.cart) {
  for (let customerSelection of stocks) {
    if (customerSelection.name === customerCart) {
      if (customerSelection.inventory > 0) {
        subtotal += customerSelection.price;
        customerSelection.inventory--;
      }
      else {
        console.log(`${customerSelection.name} is currently out of stock.`)
      }
      break;
    }
}
};

let finalBill = subtotal * (1-customerDiscount);
console.log(`Customer ${customer.customerName} pays $${finalBill.toFixed(2)}`);
};

//Log one product with discount
console.log("\n---- Part 6: Log One Product with Discount ----");

  for (let key in stocks[0]) {
  console.log(`${key}: ${stocks[0][key]}`)   
  };

//Log all product inventory, destructuring
console.log("\n---- Part 7: Log All Product Inventory With Discounts and Reduced Inventory ----");

for (let stock of stocks) {
  console.log("----");
for (let [key, value] of Object.entries(stock)) {
  console.log(`${key}: ${value}`)
}
};
