// represents the full list
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new Node(value);
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  // returns the total number of nodes in the list
  size() {
    if (this.head === null) {
      return 0;
    }

    let i = 1;
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
      i++;
    }
    return i;
  }

  // returns the first node in the list
  head() {
    return this.head;
  }

  // returns the last node in the list
  tail() {
    let node = this.head;

    if (node === null) {
      console.log("The list is empty");
      return;
    }

    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  // returns the node at the given index
  at(index) {
    if (index < 0) {
      console.log("Error! Invalid index. Selected index can`t be less than 0");
      return;
    }

    let i = 0;
    let node = this.head;

    while (i < index) {
      node = node.next;
      i++;
    }

    return node;
  }

  // removes the last element from the list
  pop() {
    let node = this.head;
    let prevNode;
    while (node.next !== null) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;
  }

  // returns true if the passed in value is in the list and otherwise returns false
  // TODO: check later
  contains(value) {
    let node = this.head;
    let isPresented = false;
    while (node.next !== null) {
      if (node.value === value) {
        isPresented = true;
        break;
      }
      node = node.next;
    }
    if (node.value === value) isPresented = true; // checks last none
    return isPresented;
  }

  // returns the index of the node containing value, or null if not found.
  find(value) {
    let i = 0;
    let nodeIndex = null;
    let node = this.head;
    while (node.next !== null) {
      if (node.value === value) {
        nodeIndex = i;
        break;
      }
      node = node.next;
      i++;
    }
    if (node.value === value) nodeIndex = i;
    return nodeIndex;
  }

  // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let list = "";
    let node = this.head;

    if (node === null) {
      console.log("The list is empty");
      return;
    }

    while (node.next !== null) {
      list += `${node.value} -> `;
      node = node.next;
    }
    list += `${node.value} -> null`;
    console.log(list);
    // return list;
  }

  /*
  const insertAt = (value, index) => {};

  const removeAt = (index) => {};
  */
}

// containing a value property and a link to the nextNode, set both as null by default
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// const list = new LinkedList();
const list = new LinkedList(new Node("head node"));
list.append("2 node");
list.append("3 node");
list.append("4 node");
list.append("5 node");
