class Stack {
    constructor() {
      this.items = [];
    }
    
    push(element) {
      this.items.push(element);
    }
    
    pop() {
      return this.items.pop();
    }
    
    peek() {
      return this.items[this.items.length - 1];
    }
    
    isEmpty() {
      return this.items.length === 0;
    }
    
    contains(element) {
      return this.items.includes(element);
    }
  }
  
  var stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(stack.contains(2)); // Output: true
  console.log(stack.contains(3)); // Output: false
  