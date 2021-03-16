class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  getCount() {
    let count = 1;
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let lastNode = this.head;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    return lastNode.data;
  }

  addNode(node) {
    let lastNode = this.head;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    lastNode.next = node;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);

let list = new LinkedList(node1);
let node3 = new ListNode(3);

list.addNode(node3);
list.addNode(new ListNode(4));

console.log("count: ", list.getCount());
console.log(list.getLast());
console.log(list.getFirst());
