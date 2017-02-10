
// https://www.hackerrank.com/challenges/divisible-sum-pairs

// Given an array of integers and a target integer, print the number of index pairs where the sum  of the pair is divisible by the target integer. Integer pairs can be duplicate. Index pairs may not be two of the same index.

// FUNCTIONS

function generateValidPairs(arr, divisor) {
  let validPairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const indexPair = [i,j];

      if (isValidPair(arr, indexPair, divisor)) {
        validPairs.push(indexPair);
      }
    }
  }

  return validPairs;
}

function isValidPair(arr, indexPair, divisor) {
  const [i, j] = indexPair;

  let validPair;

  if (i >= j) {
    validPair = false;
  } else {
    const integerA = arr[i];
    const integerB = arr[j];
    const sum = integerA + integerB;
    const divisibleSum = hasFactor(sum, divisor);

    validPair = divisibleSum;
  }

  return validPair;
}

function hasFactor(num, factor) {
  return num % factor === 0;
}

// MAIN

(function main() {
  const integers = [1,3,2,6,1,2];
  const divisor = 3;

  const validPairs = generateValidPairs(integers, divisor);
  const validPairCount = validPairs.length;

  console.log(validPairCount);
}());
