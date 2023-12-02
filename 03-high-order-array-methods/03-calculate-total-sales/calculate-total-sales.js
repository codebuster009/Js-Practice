function calculateTotalSalesWithTax(arr , tax) { 
    let taxRate = tax/100
    let totalPrice = 0
    for(let i = 0; i < arr.length ; i++) {
    totalPrice +=  arr[i].price * arr[i].quantity
    }
    saleTax =   totalPrice * tax/100
    total = saleTax + totalPrice

    let totalSalesWithTax = `${total}(${totalPrice} + ${tax}% tax)`
    return totalSalesWithTax
}

module.exports = calculateTotalSalesWithTax;


//Ineffective way
// function calculateTotalSalesWithTax(arr , tax) {
//     const totalPrice = arr[0].price * arr[0].quantity + arr[1].price * arr[1].quantity + arr[2].price * arr[2].quantity 
//     console.log(totalPrice)
//     const taxRate = tax / 100
//     const totalSale = totalPrice + taxRate
//     console.log(totalSale)

// }