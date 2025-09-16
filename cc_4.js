// Coding Challenge 3b

let inventory = [
    {sku: "SKU-001",
     name: "Book",
     price: 18.50,
     stock: 2
     },

    {sku: "SKU-002",
      name: "Paperclip",
      price: 2.30,
      stock: 40
    },

    {sku: "SKU-003",
     name: "Shaving cream",
     price: 12.50,
     stock: 12
    },

    {sku: "SKU-004",
     name: "Pool",
     price: 2000.30,
     stock: 8
    }
  ];

//Log items
console.log("Step 2:")
inventory.forEach(obj => console.log(`${obj.sku} | ${obj.name} | \$${obj.price} | ${obj.stock}`))

//Add new item
let newItemChipAndDip = {sku: "SKU-005",
     name: "Chip and dip",
     price: 30.00,
     stock: 8
};

inventory.push(newItemChipAndDip);

//Remove last item
remove1 = inventory.pop();

//Update price and stock
inventory[1].price = 2.00;
inventory[0].stock = 1;

console.log("\nStep 3: A sale on paperclips and -1 in book stock")
inventory.forEach(obj => console.log(`${obj.sku} | ${obj.name} | \$${obj.price} | ${obj.stock}`))


//ORDERS ARRAY

let orders = [
  {orderId: "001",
   items: [{sku: "SKU-001", qty: 1}, {sku: "SKU-004", qty: 1}]},

  {orderID: "002",
   items: [{sku: "SKU-003", qty: 2}]
  }
];


