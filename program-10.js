class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  pushOp(val) {
    this.items.push(val);
    this.size += 1;
  }
  popOp() {
    this.size -= 1;
    return this.items.pop();
  }
  peeakVal() {
    return this.items[this.size - 1];
  }
  showStack() {
    console.log("STACK Items :", ...this.items);
  }
  getSize() {
    return this.size;
  }
}

let stack = new Stack();
stack.pushOp(5);
stack.pushOp(2);
stack.pushOp(13);
stack.pushOp(70);
stack.pushOp(40);
let smallest;
let top;
while (stack.getSize() >= 1) {
  smallest = stack.popOp();
  top = stack.peeakVal();
  if (smallest > top) {
    smallest = top;
  } else if(smallest<top) {
    stack.popOp()
    stack.pushOp(smallest);
  }
  else if(smallest==top){
    continue;
  }
}
console.log(smallest)