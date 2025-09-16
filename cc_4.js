// Coding Challenge 4

let stock = [
    {category: "Apparel",
     name: "Shirt",
     price: 25.00,
     inventory: 18
     },

    {category: "Groceries",
     name: "Cauliflower",
     price: 5.50,
     inventory: 12
    },

    {category: "Electronics",
     name: "Calculator Watch",
     price: 50.99,
     inventory: 30
    },

    {category: "Household",
     name: "Chair",
     price: 35.50,
     inventory: 40
    },

    {category: "Apparel",
     name: "Socks",
     price: 8.00,
     inventory: 8
    }
  ];

//Discount loop by category
console.log("Step 2:")
inventory.forEach(obj => console.log(`${obj.sku} | ${obj.name} | \$${obj.price} | ${obj.stock}`))

//Discount by customer
let newItemChipAndDip = {sku: "SKU-005",
     name: "Chip and dip",
     price: 30.00,
     stock: 8
};

inventory.push(newItemChipAndDip);

//Simulate purchases
remove1 = inventory.pop();

//Log each product with discount
inventory[1].price = 2.00;
inventory[0].stock = 1;

console.log("\nStep 3: A sale on paperclips and -1 in book stock")
inventory.forEach(obj => console.log(`${obj.sku} | ${obj.name} | \$${obj.price} | ${obj.stock}`))


//Log all product inventory

let orders = [
  {orderId: "001",
   items: [{sku: "SKU-001", qty: 1}, {sku: "SKU-004", qty: 1}]},

  {orderID: "002",
   items: [{sku: "SKU-003", qty: 2}]
  }
];


