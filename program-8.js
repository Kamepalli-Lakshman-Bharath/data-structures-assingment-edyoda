// A function to check if all the brackets are closed in a code snippet
function checkBrackets(code) {
    let stack = [];
    let pairs = {
      "(": ")",
      "[": "]",
      "{": "}"
    };
    for (let char of code) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      }
      else if (char === ")" || char === "]" || char === "}") {
        let last = stack.pop();
        if (pairs[last] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  console.log(checkBrackets("{}()"))
  