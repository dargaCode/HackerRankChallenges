
// https://www.hackerrank.com/challenges/30-linked-list

// Create a LinkedList class with an append function to add values to the tail.

// CLASSES

function LinkedList(startingData) {
  head = new Node(startingData, null);

  this.append = function(data) {
    const newTail = new Node(data, null);
    let currentNode = head;

    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newTail;
  }

  this.print = function() {
    let currentNode = head;

    console.log('\nlist nodes:');

    console.log(` - ${currentNode.data}`);

    while (currentNode.next != null) {
      currentNode = currentNode.next;
      console.log(` - ${currentNode.data}`);
    }
  }
}

function Node(data) {
  this.data = data;
  this.next = null;
}

// MAIN

(function main() {
  const list = new LinkedList('hello');

  list.print();

  list.append('I\'m');
  list.print();

  list.append('a');
  list.print();

  list.append('linked');
  list.print();

  list.append('list');
  list.print();
}());
