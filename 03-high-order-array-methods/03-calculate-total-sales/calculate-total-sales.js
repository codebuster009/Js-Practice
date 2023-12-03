//Always try first to solve with the loop approach and than  make it efficient afterwards
//If I would have used Map Reduce both it would have been expensive process and internally both use for loop and we would be using two times instead of one 

function calculateTotalSalesWithTax(prodArr, tax) {
  let totalPriceBeforeTax = prodArr.reduce((totalPrice, item) => {
    totalPrice += item.price * item.quantity;

    return totalPrice;
  }, 0);

  let taxCost = (totalPriceBeforeTax * tax) / 100;

  let totalPriceAfterTax = totalPriceBeforeTax + taxCost;

  return `${totalPriceAfterTax}(${totalPriceBeforeTax} + ${tax}%)`;
}

module.exports = calculateTotalSalesWithTax;
//Ineffective way
// function caelculateTotalSalesWithTax(arr , tax) {
//     const totalPrice = arr[0].price * arr[0].quantity + arr[1].price * arr[1].quantity + arr[2].price * arr[2].quantity
//     console.log(totalPrice)
//     const taxRate = tax / 100
//     const totalSale = totalPrice + taxRate
//     console.log(totalSale)

// }


//Effective Way
// // Loop Method
// function calculateTotalSalesWithTax(arr , tax) {
//     let taxRate = tax/100
//     let totalPrice = 0
//     for(let i = 0; i < arr.length ; i++) {
//     totalPrice +=  arr[i].price * arr[i].quantity
//     }
//     saleTax =   totalPrice * tax/100
//     total = saleTax + totalPrice

//     let totalSalesWithTax = `${total}(${totalPrice} + ${tax}% tax)`
//     return totalSalesWithTax
// }
