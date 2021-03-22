// import Node from './Node';

class Node {
  constructor(value, node = null) {
    this.next = node;
    this.value = value;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}

// export default Node;

// BEGIN (write your solution here)

// VERSION #1 using recursion

/* const reverseLinkedList = (head) => {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}; */

// VERSION #2 using while loop

const reverse = (list) => {
  let reversedList = null;
  let current = list;

  while (current) {
    reversedList = new Node(current.getValue(), reversedList);
    current = current.getNext();
  }

  return reversedList;
};

export default reverse;
// END
