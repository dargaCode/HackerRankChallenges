
// https://www.hackerrank.com/challenges/30-2d-arrays

/* We define an hourglass within a 2d array to be a subset of values with the following shape:

a b c
  d
e f g

Given a 6x6 matrix, calculate the sum of every existing hourglass, and print the maximum hourglass sum. */

// CONSTANTS

const HOURGLASS_SIDE_LENGTH = 3;

// FUNCTIONS

function getMaxHourglassSum(matrix) {
  const matrixWidth = matrix[0].length;
  const matrixHeight = matrix.length;

  const maxHourglassI = matrixWidth - HOURGLASS_SIDE_LENGTH;
  const maxHourglassJ = matrixHeight - HOURGLASS_SIDE_LENGTH;

  // not initializing to 0 allows negative number to be the max.
  let maxHourglassSum;

  for (let i = 0; i <= maxHourglassI; i++) {
    for (let j = 0; j <= maxHourglassJ; j++) {
      const hourglassSum = sumHourglass(matrix, i, j);

      // Not initializing to zero and then checking for undefined allows maximum to be negative.
      if (hourglassSum > maxHourglassSum || maxHourglassSum === undefined) {
        maxHourglassSum = hourglassSum;
      }
    }
  }

  return maxHourglassSum;
}

function sumHourglass(matrix, startingI, startingJ) {
  const iBoundary = startingI + HOURGLASS_SIDE_LENGTH;
  const jBoundary = startingJ + HOURGLASS_SIDE_LENGTH;

  let hourglassSum = 0;

  for (let i = startingI; i < iBoundary; i++) {
    for (let j = startingJ; j < jBoundary; j++) {
      const relativeI = i - startingI;
      const relativeJ = j - startingJ;

      const hourglassSpace = isHourGlassSpace(relativeI, relativeJ);

      if (hourglassSpace) {
        const element = matrix[i][j];

        hourglassSum += element;
      }
    }
  }

  return hourglassSum;
}

function isHourGlassSpace(localI, localJ) {
  const leftEmptySpace = localI === 1 && localJ === 0;
  const rightEmptySpace = localI === 1 && localJ === 2;
  const hourglassSpace = !leftEmptySpace && !rightEmptySpace;

  return hourglassSpace;
}

// MAIN

(function main() {
  const matrix = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ];

  const maxHourglassSum = getMaxHourglassSum(matrix);

  console.log(maxHourglassSum);
}());
