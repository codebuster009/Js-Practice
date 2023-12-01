function calculateTotalSalesWithTax(arr , tax) {
    const totalPrice = arr[0].price * arr[0].quantity + arr[1].price * arr[1].quantity + arr[2].price * arr[2].quantity 
    console.log(totalPrice)
    const taxRate = tax / 100
    const totalSale = totalPrice + taxRate
    console.log(totalSale)

}

module.exports = calculateTotalSalesWithTax;
