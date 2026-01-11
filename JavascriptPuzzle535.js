/* Use a map method to calculate revenue for each product */

const products = [
{ name: 'Widget A', price: 10, quantity: 50 },
{ name: 'Widget B', price: 15, quantity: 30 }, 
{ name: 'Widget C', price: 8, quantity: 70 },
]

const productRevenues = products.map((product) => product.price * product.quantity)
console.log(productRevenues);  // [500, 450, 560]

// Use filter method to select products with revenue over > 500

const highRevenueProducts = productRevenues.filter((productRevenues) => productRevenues > 500);

console.log(highRevenueProducts); // [560]

// Use Reduce method to calculate the total revenue

const totalRevenue = productRevenues.reduce((acc, revenue) => acc + revenue, 0);

console.log(totalRevenue); // 1510

