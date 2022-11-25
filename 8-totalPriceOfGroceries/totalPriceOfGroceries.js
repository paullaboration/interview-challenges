// 8. Total Price of Groceries. (Array of Objects)
console.log("8. Total Price of Groceries");

const groceries = [
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Eggs", quantity: 12, price: 0.1 },
  { product: "Bread", quantity: 2, price: 1.6 },
  { product: "Cheese", quantity: 1, price: 4.5 }
];

const total = (array) => array.reduce((a, v) => a + v.quantity * v.price, 0);
console.log(total(groceries));