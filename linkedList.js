class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(val) {
    const newNode = new LinkedListNode(val, this.head);
    this.head = newNode;
    this.length++;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
