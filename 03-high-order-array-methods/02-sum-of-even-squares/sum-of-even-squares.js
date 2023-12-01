function sumOfEvenSquares(nums) {
let squaredSum = nums.filter((num) => num % 2 === 0).map((odd) => odd * odd).reduce((square , sum) => sum + square , 0)
return squaredSum
}

module.exports = sumOfEvenSquares;
