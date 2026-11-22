class Node {
  data: any;
  next: any;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  head: any;
  tail: any;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data: any) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  pop() {
    if (!this.head) return null;

    const removeNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.size--;
    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}

export { Queue };

