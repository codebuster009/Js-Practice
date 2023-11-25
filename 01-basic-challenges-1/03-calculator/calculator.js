function calculator(num1 , num2 , operator) {
switch(operator) {
  case "-" : {
   return num1 - num2
  }
  break;
  case "+" : {
    return num1 + num2
  }
  break;
  case "/": {
    return num1/num2
  }
  break;
  case "*" : {
   return num1 * num2
  }
  break;
  default: {
    return "Please Specify the calculation you want to perform"
  }
}
}

module.exports = calculator;


// Note
// The switch statement should be followed by expressions that are compared to the values of case statements. In your code, you're using comparisons (operator === "+", operator === "*", etc.) as case expressions, which is not how switch statements work. 