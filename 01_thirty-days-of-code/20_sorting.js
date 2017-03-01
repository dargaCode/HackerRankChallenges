
// https://www.hackerrank.com/challenges/30-sorting

// Given an array, sort it using bubble sort. Print the number of swaps required, the first element, and the last element.

// FUNCTIONS

function bubbleSort(arr) {
  let totalSwapCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentPassSwapCount = 0;

    for (let j = 1; j < arr.length - i; j++) {
      const previous = arr[j - 1];
      const current = arr[j];

      // swap needed
      if (previous > current) {
        arr[j] = previous;
        arr[j - 1] = current;

        currentPassSwapCount++;
        totalSwapCount++;
      }
    }

    // array is fully sorted
    if (currentPassSwapCount === 0) {
      break;
    }
  }

  console.log(`The array is sorted in ${totalSwapCount} swaps.`);

  return arr;
}

// MAIN

(function main() {
  const arr = [300, 200, 100, 10, 2];

  const sorted = bubbleSort(arr);

  const firstElement = sorted[0];
  const lastElement = sorted[sorted.length - 1];

  console.log(`First Element: ${firstElement}`);
  console.log(`Last Element: ${lastElement}`);
}());
