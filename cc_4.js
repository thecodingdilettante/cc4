// Coding Challenge 4

let stocks = [
    {category: "apparel",
     name: "shirt",
     price: 25.00,
     inventory: 18
     },

    {category: "groceries",
     name: "cauliflower",
     price: 5.50,
     inventory: 12
    },

    {category: "electronics",
     name: "calculator watch",
     price: 50.99,
     inventory: 30
    },

    {category: "household",
     name: "chair",
     price: 35.50,
     inventory: 40
    },

    {category: "hobbies",
     name: "video game",
     price: 8.00,
     inventory: 8
    }
  ];

console.log("---- Part 2: Products Without Discount ----");
stocks.forEach((obj, index) => console.log(`${index} | ${obj.category} | ${obj.name} | \$${obj.price.toFixed(2)} | ${obj.inventory}`));

//Discount loop by category
for (const stock of stocks) {
  let discount = 0;

  switch (stock.category) {
  case "electronics":
    discount = .20  // 20% off electronics
    break;

  case "apparel":
    discount = .15  // 15% off apparel
      break;

  case "groceries":
  case "household":
    discount = .10  // 10% off groceries, household
      break;

  default:
    discount = 0
    break;
};

stock.promoPrice = (stock.price * (1-discount)).toFixed(2);

};

//Initialize customer list

let customers = [
  {customerNumber: 1, customerType: "regular", cart: [{name:"shirt", qty: 3}, {name:"cauliflower", qty: 3}]},

  {customerNumber: 2, customerType: "student",  cart: [{name:"chair", qty: 1}, {name:"video game", qty: 5}]},

  {customerNumber: 3, customerType: "senior", cart: [{name:"cauliflower", qty: 8}, {name:"calculator watch", qty: 2}]},
];

//Discount by customer

let customerType = "regular";

if (customerType === "senior") {
  customerDiscount = .07;
}

else if (customerType === "student") {
  customerDiscount = .05;
}

else {
  customerDiscount = 0;
};

//Simulate purchases
console.log("\n---- Part 5: Simulate 3 Customers Purchases ----");

for (let customers = 1; customers <= 3; customers++) {
  let subtotal = 0;

for (let customerSelection of stocks) {
    if (customerSelection.inventory) {
    subtotal = subtotal + customerSelection.price;
    customerSelection.inventory--;
  
}
};

let finalBill = subtotal * (1-customerDiscount);
console.log(`Customer ${customers} pays $${finalBill.toFixed(2)}`);
};

//Log one product with discount
console.log("\n---- Part 6: Log One Product with Discount ----");

  for (let key in stocks[0]) {
  console.log(`${key}: ${stocks[0][key]}`)   
  };

//Log all product inventory, destructuring
console.log("\n---- Part 7: Log All Product Inventory With Discounts and Reduced Inventory ----");

for (let [index, item] of Object.entries(stocks[0])) {
  console.log(`1. ${index}: ${item}`)
};

console.log("----");

for (let [index, item] of Object.entries(stocks[1])) {
  console.log(`2. ${index}: ${item}`)
};

console.log("----");

for (let [index, item] of Object.entries(stocks[2])) {
  console.log(`3. ${index}: ${item}`)
};

console.log("----");

for (let [index, item] of Object.entries(stocks[3])) {
  console.log(`4. ${index}: ${item}`)
};

console.log("----");

for (let [index, item] of Object.entries(stocks[4])) {
  console.log(`5. ${index}: ${item}`)
};