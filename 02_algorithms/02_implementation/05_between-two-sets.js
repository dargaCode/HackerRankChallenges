
// https://www.hackerrank.com/challenges/between-two-sets

// Given two arrays, print the count of all integers that are multiples of the first array, and factors of the second array.

// FUNCTIONS

function getFactors(num) {
  const half = num/2;
  const factors = [];

  for (let i = 1; i <= half; i++) {
    if (isFactor(num, i)) {
      factors.push(i);
    }
  }

  // add self, since the loop only went to half
  factors.push(num);

  return factors;
}

function isFactor(num, factor) {
  return num % factor === 0;
}

function isMultiple(num, multiple) {
  return isFactor(multiple, num);
}

function filterCommonFactors (factors, nums) {
  const commonFactors = factors.filter(function(factor) {
    const isCommonFactor = nums.every(function(num) {
      return isFactor(num, factor);
    });

    return isCommonFactor;
  });

  return commonFactors;
}

function filterCommonMultiples (multiples, nums) {
  const commonMultiples = multiples.filter(function(multiple) {
    const isCommonMultiple = nums.every(function(num) {
      return isMultiple(num, multiple);
    });

    return isCommonMultiple;
  });

  return commonMultiples;
}

// MAIN

(function main() {
  const arrayA = [2, 4];
  const arrayB = [16, 32, 96];

  const unfilteredFactors = getFactors(arrayB[0]);
  const arrayBTail = arrayB.slice(1);

  const commonFactors = filterCommonFactors(unfilteredFactors, arrayBTail);

  const commonMultiples = filterCommonMultiples( commonFactors, arrayA);

  const result = commonMultiples.length;

  console.log(result);
}());
