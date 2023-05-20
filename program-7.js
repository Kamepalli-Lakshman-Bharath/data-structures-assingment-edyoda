// A function to convert a str expression to an infix expression
function prefixToInfix(str) {
    
    let operands = [];
    let infix = "";
    for (let i = str.length - 1; i >= 0; i--) {
      let char = str[i];
      if (isOperand(char)) {
        operands.push(char);
      }
      else if (isOperator(char)) {
        let op1 = operands.pop();
        let op2 = operands.pop();
        let subExpr = "(" + op1 + char + op2 + ")";
        operands.push(subExpr);
      }
    }
    infix = operands.pop();
    return infix;
  }
  
  function isOperand(char) {
    return /^[a-zA-Z0-9]$/.test(char);
  }
  
  function isOperator(char) {
    return /^[+\-*/%]$/.test(char);
  }
  
  console.log(prefixToInfix("+12")); 
  console.log(prefixToInfix("+-345"));
  console.log(prefixToInfix("%+/0-9385")); 
  