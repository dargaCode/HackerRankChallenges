
// https://www.hackerrank.com/challenges/30-linked-list-deletion

/* Given an array of numbers, add them to a linked list.

The numbers will always be in non-descending order.

Identify and remove nodes that are duplicates of the previous node, then print the remaining values.*/

// CLASS

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList(initialData = null) {
  head = null;

  if (initialData) {
    head = new Node(initialData);
  }

  this.append = function(data) {
    const newNode = new Node(data);

    if (!head) {
      head = newNode;
    } else {
      let tailNode = head;

      while (tailNode.next) {
        tailNode = tailNode.next;
      }

      tailNode.next = newNode;
    }
  }

  this.removeDuplicates = function() {
    let lastNode;
    let node = head;

    while (node.next) {
      lastNode = node;
      node = node.next;

      const duplidateNode = lastNode.data === node.data;

      if (duplidateNode) {
        // remove the current node
        lastNode.next = node.next;
        // go back one node (removes streaks longer than 2)
        node = lastNode;
      }

    }
  }

  this.display = function() {
    let dataStr = '';
    let node = head;

    while (node) {
      dataStr += `${node.data} `;
      node = node.next;
    }

    console.log(dataStr.trim());
  }

}

// MAIN

(function main() {
  const testInputs = [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 5, 5, 5, 5];

  const list = new LinkedList(1);

  for (const input of testInputs) {
    list.append(input);
  }

  list.display();
  list.removeDuplicates();
  list.display();
}());
