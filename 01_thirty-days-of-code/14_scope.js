
// https://www.hackerrank.com/challenges/30-scope

/* Complete the Difference class by writing the following:

A class constructor that takes an array of integers as a parameter and saves it to the  instance variable.

A computeDifference method that finds the maximum absolute difference between any  numbers in  and stores it in the  instance variable. */

// CLASSES

function Difference(elements) {
  this.maximumDifference = 0;

  this.maximumDifference = function() {
    let maximumDifference = 0;

    for (let i = 0; i < elements.length; i++) {
      for (let j = i; j < elements.length; j++) {
        const valueA = elements[i];
        const valueB = elements[j];

        const difference = Math.abs(valueA - valueB);

        if (difference > maximumDifference) {
          maximumDifference = difference;
        }
      }
    }

    this.maximumDifference = maximumDifference;
  };

  this.maximumDifference();
}

// MAIN

(function main() {
  const arr = [1, 2, 5];

  const diff = new Difference(arr);

  console.log(diff.maximumDifference);
}());
