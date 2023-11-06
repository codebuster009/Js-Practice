function calculator(num1, num2, operator) {
   let result;
   console.log(num1 , num2)
   console.log("going inside switch")
   console.log(operator)
  switch (operator) {
    case "+":
      console.log("adding")
      result = num1 + num2;
      console.log(result) 
      break;
    case "*":
      console.log("multiplying")
     result = num1 * num2;
      return result
      break;
    case "-":
      console.log("substracting")
      result =  num1 - num2;
      return result
      break;
    case  "/":
      console.log("dividing")
      result =  num1 / num2;
      return result
      break;
      default:
         console.log("okay")
  }
  
}

module.exports = calculator;


// Note
// The switch statement should be followed by expressions that are compared to the values of case statements. In your code, you're using comparisons (operator === "+", operator === "*", etc.) as case expressions, which is not how switch statements work. 