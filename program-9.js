//Write a program to reverse a stack.
function reverseStack(stack){
     let revSta = []
    for(let i =stack.length-1 ; i>=0 ; i--){
        revSta.push(stack[i])
    }
     return revSta;

}
console.log(reverseStack([13,5,5,6,7]))
