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

console.log("Step 2. Products Without Discount:");
stock.forEach(obj => console.log(`${obj.category} | ${obj.name} | \$${obj.price} | ${obj.inventory}`));

//Discount loop by category
for (const product of stock) {
  
}

console.log("Step 3. Apply Discount By Category:")
stock.forEach(obj => console.log(`${obj.category} | ${obj.name} | \$${obj.price} | ${obj.inventory}`));


//Discount by customer




//Simulate purchases


//Log each product with discount



//Log all product inventory, destructuring
for (const [index, item] of stock.entries()) {
  console.log(`${index}: ${stock.category} | ${stock.name} | \$${stock.price} | ${stock.inventory}`);
}