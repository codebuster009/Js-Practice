const calculateTotalSalesWithTax = require('./calculate-total-sales.js');

const products = [
    { name: 'Chocolate', price: 2.5, quantity: 5 },
    { name: 'Chips', price: 1.2, quantity: 10 },
    { name: 'Soda', price: 1.0, quantity: 8 },
    { name: 'Candy', price: 0.5, quantity: 15 },
];

const result = calculateTotalSalesWithTax(products, 5);

console.log(result);
