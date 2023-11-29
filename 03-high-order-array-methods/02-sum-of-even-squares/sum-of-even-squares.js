function sumOfEvenSquares(arr) {
let squaredSum = arr.filter((num) => num % 2 ).map((even) => even * even)
return squaredSum
}

module.exports = sumOfEvenSquares;
