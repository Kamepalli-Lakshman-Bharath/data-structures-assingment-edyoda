//Read about infix, prefix, and postfix expres. Write a program to convert postfix to prefix expre.
function postfixToPrefix(expre) {
    const stack = [];
  
    for (let item of expre) {
      if (isOperand(item)) {
        stack.push(item);
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const prefix = item + operand1 + operand2;
        stack.push(prefix);
      }
    }
  
    return stack.pop();
  }
  
  function isOperand(item) {
    return /^[a-zA-Z0-9]+$/.test(item);
  }
  
  
  const postfixExpr = "53+8*42/-";
  const prefixExpr = postfixToPrefix(postfixExpr);
  console.log("Prefix expre:", prefixExpr);
  