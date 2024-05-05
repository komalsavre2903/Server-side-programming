class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
      return this.head === null;
    }
  }
  
  var list = new LinkedList();
  console.log(list.isEmpty()); // Output: true
  list.head = new Node(1);
  console.log(list.isEmpty()); // Output: false
  