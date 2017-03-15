
// https://www.hackerrank.com/challenges/arrays-ds

// Given an array of integers, print its elements in reverse order as a single space-separated line.

// FUNCTIONS

function reverseArray(array) {
  let reversed = [];

  for (let i = 0; i < array.length; i++) {
    const reverseIndex = array.length - 1 - i ;
    const reverseElement = array[reverseIndex];

    reversed.push(reverseElement);
  }

  return reversed;
}

// MAIN

(function main() {
  const testArray = [1, 2, 3, 4, 5];

  const reversedArray = reverseArray(testArray);
  const outputString = reversedArray.join(' ');

  console.log(outputString);
}());
