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

    {category: "apparel",
     name: "socks",
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
    discount = .20
    break;

  case "apparel":
    discount = .15
      break;

  case "groceries":
  case "household":
    discount = .10
      break;

  default:
    discount = 0
    break;
};

stock.promoPrice = (stock.price * (1-discount)).toFixed(2);

};

//Initialize customer list

let customers = [
  {customerNumber: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.07, cart: [{sku:"001", qty: 2}, {sku:"002", qty: 3}]},

  {customerNumber: 2, customerType: "student", couponCode: "FREESHIP", taxRate: 0.07, cart: [{sku:"004", qty: 1}, {sku:"005", qty: 5}]},

  {customerNumber: 3, customerType: "senior", couponCode: "SAVE10", taxRate: 0.07, cart: [{sku:"002", qty: 8}, {sku:"003", qty: 2}]},
];

//Discount by customer

let customerType = "regular";

if (customerType === "senior") {
  discount = .07;
}

else if (customerType === "student") {
  discount = .05;
}

else {
  discount = 0;
};

//Simulate purchases
console.log("\n---- Part 5: Simulate 3 Customers Purchases ----");

for (let customers = 1; customers <= 3; customers++) {
  let total = 0;

for (let selection of stocks) {
    if (selection.inventory) {
    total = total + selection.price;
    selection.stock--;
  
}
};

let finalBill = total * (1-discount);
console.log(`Customer ${customers} pays $${finalBill.toFixed(2)}`);
};

//Log one product with discount
console.log("\n---- Part 6: Log One Product with Discount ----");

  for (let key in stocks[0]) {
  console.log(`${key}: ${stocks[0][key]}`)   
  };

//Log all product inventory, destructuring
console.log("\n---- Part 7: Log All Product Inventory With Discounts ----");

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